<script lang="ts">
	import { Input, Label, Select, Textarea, Dropzone } from 'flowbite-svelte'
	import { Upload } from 'lucide-svelte'
	import { createEventDispatcher } from 'svelte'

	import type { ActionData } from './$types'
	import type { ProjectCreateType } from '$lib/types/ProjectCreate'

	const dispatch = createEventDispatcher()
	export let form: ActionData
	export let project: ProjectCreateType

	let category = [
		{ value: 'art', name: 'ศิลปะ' },
		{ value: 'software', name: 'ซอฟต์แวร์' },
		{ value: 'entertainment', name: 'ความบันเทิง' }
	]

	function changeProject(key: string, event: Event) {
		let update: Record<string, any> = {}
		let target = event.target as HTMLSelectElement
		update[key] = target.value

		dispatch('editProject', update)
	}
</script>

<div class="space-y-7">
	<div class="grid grid-cols-6 gap-7">
		<Label>
			เลือกหมวดหมู่
			<Select
				class="mt-2"
				items={category}
				name="category"
				required
				value={form?.data.category || project.category}
				on:change={(event) => changeProject('category', event)}
			/>
		</Label>

		<div class="col-span-5">
			<Label for="name" class="mb-2">ชื่อโครงการ</Label>
			<Input
				type="text"
				name="name"
				required
				value={form?.data.name || project.name}
				on:change={(event) => changeProject('name', event)}
			/>
		</div>
	</div>
	<div class="">
		<Label for="description" class="mb-2">คำอธิบาย</Label>
		<Textarea
			rows="4"
			name="description"
			required
			value={form?.data.description || project.description}
			on:change={(event) => changeProject('description', event)}
		/>
	</div>

	<div class="">
		<Label for="description" class="mb-2">รูปภาพ</Label>
		<Dropzone name="dropzone">
			<Upload />
			<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
				<span class="font-semibold">Click to upload</span> or drag and drop
			</p>
			<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
		</Dropzone>
	</div>
</div>
