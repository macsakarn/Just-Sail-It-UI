<script lang="ts">
	import type { ProfilesType } from '$lib/types/ProfilesType'
	import { Label, Input, Button, P, A } from 'flowbite-svelte'
	import CardInfo from './CardInfo.svelte'

	export let profile: ProfilesType
</script>

<CardInfo header="ข้อมูลติดต่อ">
	<div slot="modal" class="flex flex-col space-y-6">
		<div class="">
			<Label class="mb-2" for="location">ที่ตั้ง</Label>
			<Input type="text" required name="location" value={profile.location ?? ""} />
		</div>
		<div class="">
			<Label class="mb-2" for="website">Website</Label>
			<Input type="url" required name="website" value={profile.website ?? ""} />
		</div>
		<div class="">
			<Label class="mb-2" for="portfolio">Portfolio</Label>
			<Input type="url" required name="portfolio" value={profile.portfolio ?? ""} />
		</div>
		<div class="">
			<Label class="mb-2" for="email">อีเมล</Label>
			<Input type="email" required name="email" value={profile.email ?? ""} />
		</div>
		<Button type="submit" color="primary" class="w-full">Save</Button>
	</div>
	<div slot="card">
		<div class="grid grid-cols-6 my-3">
			<P class="col-span-2" weight="semibold" color="text-web-black">Location</P>
			{#if profile.location}
				<P class="col-span-4">{profile.location}</P>
			{/if}
		</div>
		<div class="grid grid-cols-6 my-3">
			<P class="col-span-2" weight="semibold" color="text-web-black">Website</P>
			{#if profile.website}
				<A class="col-span-4" href={String(profile.website)}>{profile.website}</A>
			{/if}
		</div>
		<div class="grid grid-cols-6 my-3">
			<P class="col-span-2" weight="semibold" color="text-web-black">Portfolio</P>
			{#if profile.portfolio}
				<A class="col-span-4" href={String(profile.portfolio)}>{profile.portfolio}</A>
			{/if}
		</div>
		<div class="grid grid-cols-6 my-3">
			<P class="col-span-2" weight="semibold" color="text-web-black">Email</P>
			{#if profile.email}
				<P class="col-span-4">{profile.email}</P>
			{/if}
		</div>
	</div>
</CardInfo>
