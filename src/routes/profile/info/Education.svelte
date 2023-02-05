<script lang="ts">
	import { Label, Input, Button, P, Select, Modal, Hr, Heading } from 'flowbite-svelte'
	import { Edit, Plus } from 'lucide-svelte'
	import { enhance } from '$app/forms'
	import type { EducationsType } from '$lib/types/ProfilesType'

	let years = [
		{ value: '1', name: '1' },
		{ value: '2', name: '2' },
		{ value: '3', name: '3' },
		{ value: '4', name: '4' },
		{ value: 'graduated', name: 'จบการศึกษา' }
	]

	export let educations: EducationsType[] | null

	let formEducation: EducationsType
	let formModal = false
	let state: 'new' | 'update' | 'remove'

	function edit(education: EducationsType) {
		state = 'update'
		formEducation = education
		formModal = true
	}

	function newEducation() {
		state = 'new'
		formEducation = { id: '', university: '', faculty: '', major: '', years: '' }
		formModal = true
	}
</script>

<div class="card text-web-black pb-10">
	<div class="card-header flex justify-between">
		<Heading tag="h5" color="text-web-black">การศึกษา</Heading>
		<button type="button" on:click={newEducation}>
			<Plus />
		</button>
	</div>
	<div class="card-content mt-5">
		<div>
			{#if educations}
				{#each educations as education, index (education.id)}
					{#if index !== 0}
						<Hr />
					{/if}
					<div class="flex">
						<div class="basis-full">
							<div class="grid grid-cols-6 my-3">
								<P weight="semibold" class="col-span-1" color="text-web-black">มหาวิทยาลัย</P>
								<P class="col-span-5">{education.university ?? ''}</P>
							</div>
							<div class="grid grid-cols-6 my-3">
								<P weight="semibold" class="col-span-1" color="text-web-black">คณะ</P>
								<P class="col-span-5">{education.faculty ?? ''}</P>
							</div>
							<div class="grid grid-cols-6 my-3">
								<P weight="semibold" class="col-span-1" color="text-web-black">เอก</P>
								<P class="col-span-5">{education.major ?? ''}</P>
							</div>
							<div class="grid grid-cols-6 my-3">
								<P weight="semibold" class="col-span-1" color="text-web-black">ปีการศึกษา</P>
								<P class="col-span-5">{education.years ?? ''}</P>
							</div>
						</div>
						<button type="button" on:click={() => edit(education)}>
							<Edit size={20} />
						</button>
					</div>
				{/each}
			{/if}
		</div>
		<Hr hrClass="mt-10" />
	</div>
</div>

<Modal bind:open={formModal} class="w-full">
	<div class="flex flex-col space-y-6">
		<h3 class="text-xl font-medium text-gray-900 p-0">การศึกษา</h3>
		<input type="hidden" name="id" value={formEducation.id} />
		<div>
			<Label for="university" class="mb-2">ชื่อมหาวิทยาลัย</Label>
			<Input type="text" name="university" required value={formEducation.university} />
		</div>
		<div>
			<Label for="faculty" class="mb-2">คณะ</Label>
			<Input type="text" name="faculty" required value={formEducation.faculty} />
		</div>
		<div>
			<Label for="major" class="mb-2">เอก</Label>
			<Input type="text" name="major" required value={formEducation.major} />
		</div>
		<div>
			<Label for="years" class="mb-2">ปีการศึกษา</Label>
			<Select name="years" items={years} required value={formEducation.years} />
		</div>
		{#if state === 'new'}
			<Button type="submit" color="primary" class="w-full">New</Button>
		{:else}
			<div class="flex justify-end w-full gap-5">
				<Button type="submit" color="primary" class="w-40">Update</Button>
				<form
					action="?/deleteEducation"
					method="post"
					use:enhance={() => {
						formModal = false
					}}
				>
					<input type="hidden" name="id" value={formEducation.id} />
					<Button type="submit" color="red" class="w-40">Delete</Button>
				</form>
			</div>
		{/if}
	</div>
</Modal>
