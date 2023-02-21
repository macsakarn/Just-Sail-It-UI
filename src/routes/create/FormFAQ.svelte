<script lang="ts">
	import { Textarea, Tabs, TabItem } from 'flowbite-svelte'
	import SvelteMarkdown from 'svelte-markdown'

	import type { ActionData } from './$types'
	export let form: ActionData

	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	import type { ProjectCreateType } from '$lib/types/ProjectCreate'
	export let project: ProjectCreateType

	function changeProject(key: string, event: Event) {
		let update: Record<string, any> = {}
		let target = event.target as HTMLSelectElement
		update[key] = target.value
		markdown = target.value
		dispatch('editProject', update)
	}

	let markdown = project.faq
</script>

<Tabs>
	<TabItem open title="แก้ไข">
		<label for="faq">เรื่องราวของคุณ</label>
		<Textarea
			name="faq"
			rows="15"
			class="mb-4"
			value={form?.data.faq || project.faq}
			on:change={(event) => changeProject('faq', event)}
		/>
	</TabItem>
	<TabItem title="ตัวอย่าง">
		<div class="prose">
			<SvelteMarkdown source={markdown} />
		</div>
	</TabItem>
</Tabs>
