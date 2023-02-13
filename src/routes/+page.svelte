<script lang="ts">
	import { Heading, P, Button, Hr } from 'flowbite-svelte'
	import ProjectCard from '$lib/Components/ProjectCard.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div
	class="min-h-screen bg-cover bg-no-repeat bg-center grid place-content-center gap-5 text-center bg-[url('/image/bg2.png')]"
>
	<Heading tag="h1" class="mb-10" color="text-web-white" customSize="text-4xl font-bold"
		>ระบบสนับสนุนสตาร์ทอัพ</Heading
	>
	<Heading tag="h1" class="mb-10" color="text-web-white" customSize="text-4xl font-extrabold"
		>" Just Sail It "</Heading
	>

	<Button outline color="light"><span> Sign up </span></Button>
</div>

<section class="container mt-10">
	<Heading tag="h5" color="text-web-black" class="py-5">โครงการยอดนิยม</Heading>
	<div class="grid grid-cols-4 gap-5">
		{#each data.popularProjects as project (project.id)}
			<ProjectCard data={project} />
		{/each}
	</div>
</section>

<Hr class="my-8 container" height="h-px" />
