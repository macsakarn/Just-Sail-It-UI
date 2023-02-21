<script lang="ts">
	import { Input, Label } from 'flowbite-svelte'
	import {
		Facebook,
		GithubIcon,
		InstagramIcon,
		Link,
		LinkedinIcon,
		YoutubeIcon
	} from 'lucide-svelte'

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
		console.log(update)

		dispatch('editProject', update)
	}
</script>

<div class="space-y-10">
	<div class="grid grid-cols-3 gap-7">
		<div>
			<Label for="website" class="mb-2"
				><div class="flex items-center gap-3">
					<Link />
					Website URL
				</div></Label
			>
			<Input
				type="url"
				name="website"
				value={form?.data.website || project.website}
				on:change={(event) => changeProject('website', event)}
			/>
		</div>

		<div>
			<Label for="facebook" class="mb-2"
				><div class="flex items-center gap-3">
					<Facebook />
					Facebook URL
				</div></Label
			>
			<Input
				type="url"
				name="facebook"
				value={form?.data.facebook || project.facebook}
				on:change={(event) => changeProject('facebook', event)}
			/>
		</div>

		<div>
			<Label for="linkedin" class="mb-2"
				><div class="flex items-center gap-3">
					<LinkedinIcon />
					Linkedin URL
				</div></Label
			>
			<Input
				type="url"
				name="linkedin"
				value={form?.data.linkedin || project.linkedin}
				on:change={(event) => changeProject('linkedin', event)}
			/>
		</div>
	</div>
	<div class="grid grid-cols-3 gap-7">
		<div>
			<Label for="github" class="mb-2"
				><div class="flex items-center gap-3">
					<GithubIcon />
					Github URL
				</div></Label
			>
			<Input
				type="url"
				name="github"
				value={form?.data.github || project.github}
				on:change={(event) => changeProject('github', event)}
			/>
		</div>

		<div>
			<Label for="instagram" class="mb-2"
				><div class="flex items-center gap-3">
					<InstagramIcon />
					Instagram URL
				</div></Label
			>
			<Input
				type="url"
				name="instagram"
				value={form?.data.instagram || project.instagram}
				on:change={(event) => changeProject('instagram', event)}
			/>
		</div>

		<div>
			<Label for="youtube" class="mb-2"
				><div class="flex items-center gap-3">
					<YoutubeIcon />
					Youtube URL
				</div></Label
			>
			<Input
				type="url"
				name="youtube"
				value={form?.data.youtube || project.youtube}
				on:change={(event) => changeProject('youtube', event)}
			/>
		</div>
	</div>
</div>
