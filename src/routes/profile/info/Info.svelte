<script lang="ts">
	import CardInfo from './CardInfo.svelte'
	import { Label, Textarea, Button, P } from 'flowbite-svelte'
	export let aboutMe: string | null = ''
</script>

<CardInfo header="เกี่ยวกับฉัน">
	<div slot="modal" class="flex flex-col space-y-6">
		<h3 class="text-xl font-medium text-gray-900 p-0">Edit {'info'}</h3>
		<Label class="mb-3">Your About Me</Label>
		<Textarea rows="10" name="about_me" value={String(aboutMe)} required />
		<Button type="submit" color="primary" class="w-full">Save</Button>
	</div>

	<P weight="light" slot="card">
		{@html aboutMe ?? ''}
	</P>
</CardInfo>
