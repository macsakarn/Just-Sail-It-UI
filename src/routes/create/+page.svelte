<script lang="ts">
	import { Button, Tabs, TabItem } from 'flowbite-svelte'
	import { BookOpen, Briefcase, CreditCard, FileEdit, FileQuestion, Contact } from 'lucide-svelte'
	import FormInfo from './FormInfo.svelte'
	import FormFAQ from './FormFAQ.svelte'
	import FormStory from './FormStory.svelte'
	import FormContact from './FormContact.svelte'
	import FormWork from './FormWork.svelte'
	import FormFunding from './FormFunding.svelte'

	import { applyAction, enhance, deserialize } from '$app/forms'
	import type { SubmitFunction } from '$app/forms'
	import { notifications } from '$lib/notifications'
	import type { ProjectCreateType } from '$lib/types/ProjectCreate'
	import type { ActionData } from './$types'
	export let form: ActionData

	let project: ProjectCreateType = {
		name: '',
		category: '',
		description: '',
		start_fund: '',
		end_fund: '',
		goal: 0,
		story: '',
		faq: '',
		website: '',
		facebook: '',
		linkedin: '',
		github: '',
		instagram: '',
		youtube: ''
	}

	function handleProjectCreate(event: CustomEvent) {
		let update = event.detail
		project = { ...project, ...update }
		console.log(project)
	}

	import type { ActionResult } from '@sveltejs/kit'

	async function handleSubmit(this: HTMLFormElement) {
		const data = new FormData()

		for (let key in project) {
			data.append(key, project[key].toString())
		}

		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		})

		const result: ActionResult = deserialize(await response.text())

		if (result.type === 'failure') {
			const errors = result.data?.errors
			for (const [_, value] of Object.entries(errors)) {
				notifications.danger(`${value}`, 2000)
			}
		}

		applyAction(result)
	}
</script>

<div class="container space-y-7 pt-24">
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		<div class="flex justify-end gap-5 ">
			<Button outline color="dark" type="button">ดูตัวอย่าง</Button>
			<Button color="primary" type="submit">สร้างโครงการ</Button>
		</div>

		<Tabs
			style="underline"
			defaultClass="flex justify-between flex-wrap gap-10"
			contentClass="p-4 mt-4"
		>
			<TabItem open>
				<div slot="title" class="flex items-center gap-3">
					<FileEdit />
					ข้อมูลทั่วไป
				</div>

				<FormInfo {form} {project} on:editProject={handleProjectCreate} />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<BookOpen />
					เรื่องราว
				</div>

				<FormStory {form} {project} on:editProject={handleProjectCreate} />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<FileQuestion />
					คำถามที่พบบ่อย
				</div>

				<FormFAQ {form} {project} on:editProject={handleProjectCreate} />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<Contact />
					ติดต่อ
				</div>

				<FormContact {form} {project} on:editProject={handleProjectCreate} />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<CreditCard />
					การระดบทุน
				</div>

				<FormFunding {form} {project} on:editProject={handleProjectCreate} />
			</TabItem>

			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<Briefcase />
					งาน
				</div>
				<FormWork />
			</TabItem>
		</Tabs>
	</form>
</div>
