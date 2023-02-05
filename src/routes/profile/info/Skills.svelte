<script lang="ts">
	import { Badge, Input } from 'flowbite-svelte'
	import CardInfo from './CardInfo.svelte'
	import { enhance } from '$app/forms'
	export let skills: string[] | null
</script>

<CardInfo header="ความสามารถ">
	<div slot="modal" class="flex flex-wrap gap-3">
		{#if skills}
			{#each skills as skill, index (index)}
				<form action="?/delSkill" method="POST" use:enhance>
					<input type="hidden" value={skill} name="delete" />
					<button>
						<Badge dismissable large>{skill}</Badge>
					</button>
				</form>
			{/each}
		{/if}
		<form action="?/newSkill" method="POST" use:enhance>
			<Input size="sm" class="w-28" type="text" name="skill" required placeholder="New Item" />
		</form>
	</div>
	<div slot="card" class="flex flex-wrap gap-3">
		{#if skills}
			{#each skills as skill}
				<Badge large>{skill}</Badge>
			{/each}
		{/if}
	</div>
</CardInfo>
