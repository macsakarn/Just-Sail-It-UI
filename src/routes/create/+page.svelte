<script lang="ts">
	import { Button, Tabs, TabItem } from 'flowbite-svelte'
	import { BookOpen, Briefcase, CreditCard, FileEdit, FileQuestion, Contact } from 'lucide-svelte'
	import FormInfo from './FormInfo.svelte'
	import FormFAQ from './FormFAQ.svelte'
	import FormStory from './FormStory.svelte'
	import FormContact from './FormContact.svelte'
	import FormWork from './FormWork.svelte'
	import FormFunding from './FormFunding.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="container space-y-7 pt-24">
	<div class="flex justify-end gap-5 ">
		<Button outline color="dark">ดูตัวอย่าง</Button>
		<Button color="primary">สร้างโครงการ</Button>
	</div>

	<form action="?/">
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

				<FormInfo />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<BookOpen />
					เรื่องราว
				</div>

				<FormStory />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<FileQuestion />
					คำถามที่พบบ่อย
				</div>

				<FormFAQ />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<Contact />
					ติดต่อ
				</div>

				<FormContact />
			</TabItem>
			<TabItem>
				<div slot="title" class="flex items-center gap-3">
					<CreditCard />
					การระดบทุน

				</div>
				<FormFunding />
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
