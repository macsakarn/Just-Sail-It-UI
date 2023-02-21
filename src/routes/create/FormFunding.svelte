<script lang="ts">
	import { Input, Label, ButtonGroup, InputAddon } from 'flowbite-svelte'
	import SveltyPicker from 'svelty-picker'

	import type { ActionData } from './$types'
	export let form: ActionData

	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	import type { ProjectCreateType } from '$lib/types/ProjectCreate'
	export let project: ProjectCreateType

	function changeProjectCustom(key: string, event: CustomEvent) {
		let update: Record<string, any> = {}
		update[key] = event.detail
		dispatch('editProject', update)
	}

	function changeProject(key: string, event: Event) {
		let update: Record<string, any> = {}
		let target = event.target as HTMLSelectElement
		update[key] = Number(target.value)
		dispatch('editProject', update)
	}
</script>

<div class="space-y-7">
	<div class="grid grid-cols-6 gap-7">
		<div class="col-span-4">
			<Label for="project_title" class="mb-2">Address ของ ETH</Label>
			<Input
				type="text"
				name="project_title"
				value="0x9F1aA1f2179B2A85f17835F5665b3b49C71ec448"
				disabled
			/>
		</div>
		<div class="col-span-1">
			<Label for="start_fund" class="mb-2">วันเปิดการระดมทุน</Label>
			<SveltyPicker
				inputClasses="disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900  border-gray-300 p-2.5 text-sm rounded-lg"
				name="start_fund"
				format="dd-mm-yyyy"
				required
				value={form?.data.start_fund || project.start_fund}
				on:change={(event) => changeProjectCustom('start_fund', event)}
			/>
		</div>
		<div class="col-span-1">
			<Label for="end_fund" class="mb-2">วันปิดการระดมทุน</Label>
			<SveltyPicker
				inputClasses="disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900  border-gray-300 p-2.5 text-sm rounded-lg"
				name="end_fund"
				format="dd-mm-yyyy"
				required
				value={form?.data.end_fund || project.end_fund}
				on:change={(event) => changeProjectCustom('end_fund', event)}
			/>
		</div>
	</div>

	<div class="grid grid-cols-6 gap-7">
		<div class="col-span-2">
			<Label for="project_title" class="mb-2">เป้าหมาย</Label>
			<ButtonGroup class="w-full" size="md">
				<Input let:props>
					<input
						type="number"
						{...props}
						name="goal"
						value={form?.data.goal || project.goal}
						on:change={(event) => changeProject('goal', event)}
					/>
				</Input>
				<InputAddon>ETH</InputAddon>
			</ButtonGroup>
		</div>
		<div class="col-span-1">
			<Label for="fex" class="mb-2">ค่าบริการ</Label>
			<Input type="text" disabled value="ไม่มีค่าบริการ" />
		</div>
	</div>
</div>
