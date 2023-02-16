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

</script>

<div class="space-y-10">
	<div class="grid grid-cols-3 gap-7">
		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<Link />
					Website URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>

		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<Facebook />
					Facebook URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>
		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<LinkedinIcon />
					Linkedin URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>
	</div>
	<div class="grid grid-cols-3 gap-7">
		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<GithubIcon />
					Github URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>

		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<InstagramIcon />
					Instagram URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>
		<div>
			<Label for="project_title" class="mb-2"
				><div class="flex items-center gap-3">
					<YoutubeIcon />
					Youtube URL
				</div></Label
			>
			<Input type="url" name="project_title" required />
		</div>
	</div>

</div>
