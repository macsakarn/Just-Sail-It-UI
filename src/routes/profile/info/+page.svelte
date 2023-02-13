<script lang="ts">
	import Info from './Info.svelte'
	import Education from './Education.svelte'
	import Work from './Work.svelte'
	import Contract from './Contract.svelte'
	import Skills from './Skills.svelte'
	import Language from './Language.svelte'

	import { enhance } from '$app/forms'
	import type { PageData } from './$types'
	export let data: PageData
	$: profile = data.profile
</script>

<form action="?/updateProfile" method="POST" use:enhance>
	<div class="sflex gap-10">
		<div class="basis-3/5">
			<Info aboutMe={profile.about_me} />
			<form action="?/updateEducations" method="POST" use:enhance>
				<Education educations={profile.educations} />
			</form>
			<form action="?/updateExp" method="POST" use:enhance>
				<Work worksExp={profile.works_exp} />
			</form>
		</div>
		<div class="basis-2/5">
			<Contract {profile} />
			<Skills skills={profile.skills} />
			<Language languages={profile.languages} />
		</div>
	</div>
</form>
