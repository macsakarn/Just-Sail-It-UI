<script lang="ts">
	import {
		Label,
		Input,
		Button,
		P,
		Textarea,
		Modal,
		Hr,
		Heading,
		Card,
		Toggle
	} from 'flowbite-svelte'
	import { Edit, Plus } from 'lucide-svelte'
	import SveltyPicker from 'svelty-picker'
	import { enhance } from '$app/forms'
	import type { WorksExpType } from '$lib/types/ProfilesType'

	export let worksExp: WorksExpType[] | null

	let formWorksExp: WorksExpType
	let formModal = false
	let state: 'new' | 'update' | 'remove'

	function edit(works: WorksExpType) {
		state = 'update'
		formWorksExp = works
		formModal = true
	}

	function newWorkExp() {
		state = 'new'
		formWorksExp = {
			id: '',
			company_name: '',
			position: '',
			date_start: '',
			date_now: '',
			description: ''
		}
		formModal = true
	}
</script>

<div class="card text-web-black pb-10">
	<div class="card-header flex justify-between">
		<Heading tag="h5" color="text-web-black">ประสบการทำงาน</Heading>
		<button type="button" on:click={newWorkExp}>
			<Plus />
		</button>
	</div>
	<div class="card-content mt-5">
		<div class="grid grid-cols-2 gap-3">
			{#if worksExp}
				{#each worksExp as exp (exp.id)}
					<Card class="flex flex-col gap-3 relative">
						<button type="button" on:click={() => edit(exp)} class="absolute top-5 right-5">
							<Edit size={20} />
						</button>

						<P>{exp.position}</P>
						<P>{exp.company_name}</P>
						<P align="right">{exp.date_start} - {exp.date_now}</P>
						<Hr />
						<P>{exp.description}</P>
					</Card>
				{/each}
			{/if}
		</div>
		<Hr hrClass="mt-10" />
	</div>
</div>

<Modal bind:open={formModal} size="sm" class="w-full" title="ประสบการทำงาน">
	<div>
		<Label for="company_name" class="mb-2">ชื่อบริษัท</Label>
		<Input type="text" name="company_name" required bind:value={formWorksExp.company_name} />
	</div>
	<div>
		<Label for="position" class="mb-2">ตำแหน่ง</Label>
		<Input type="text" name="position" required bind:value={formWorksExp.position} />
	</div>
	<div>
		<Toggle on:click={() => (formWorksExp = { ...formWorksExp, date_now: 'ปัจจุบัน' })}
			>ปัจจุบันทำงานอยู่</Toggle
		>
	</div>
	<div class="flex justify-between">
		<div class="">
			<Label for="date_start" class="mb-2">วันที่เริ่มทำงาน</Label>
			<SveltyPicker
				bind:value={formWorksExp.date_start}
				inputClasses="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900  border-gray-300 p-2.5 text-sm rounded-lg"
				name="date_start"
				format="dd-mm-yyyy"
				required
			/>
		</div>
		<div class="">
			<Label for="date_now" class="mb-2">วันสิ้นสุดงาน</Label>
			<SveltyPicker
				bind:value={formWorksExp.date_now}
				inputClasses="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500 bg-gray-50 text-gray-900  border-gray-300 p-2.5 text-sm rounded-lg"
				name="date_now"
				format="dd-mm-yyyy"
				required
			/>
		</div>
	</div>
	<div>
		<Label for="description" class="mb-2">รายละเอียด</Label>
		<Textarea bind:value={formWorksExp.description} rows="5" name="description" required />
	</div>
	<input type="hidden" name="id" value={formWorksExp.id} />
	{#if state === 'new'}
		<Button type="submit" color="primary" class="w-full">New</Button>
	{:else}
		<div class="flex justify-end w-full gap-5">
			<Button type="submit" color="primary" class="w-40">Update</Button>
			<form
				action="?/deleteExp"
				method="post"
				use:enhance={() => {
					formModal = false
				}}
			>
				<input type="hidden" name="id" value={formWorksExp.id} />
				<Button type="submit" color="red" class="w-40">Delete</Button>
			</form>
		</div>
	{/if}
</Modal>
