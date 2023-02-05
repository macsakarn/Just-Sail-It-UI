<script lang="ts">
	import { Badge, Input } from 'flowbite-svelte'
	import CardInfo from './CardInfo.svelte'
	import { enhance } from '$app/forms'
	export let languages: string[] | null
</script>

<CardInfo header="ภาษา">
	<div slot="modal" class="flex flex-wrap gap-3">
		{#if languages}
			{#each languages as language, index (index)}
				<form action="?/delLanguage" method="POST" use:enhance>
					<input type="hidden" value={language} name="delete" />
					<button>
						<Badge dismissable large color="indigo">{language}</Badge>
					</button>
				</form>
			{/each}
		{/if}
		<form action="?/newLanguage" method="POST" use:enhance>
			<Input size="sm" class="w-28" type="text" name="language" required placeholder="New Item" />
		</form>
	</div>
	<div slot="card" class="flex flex-wrap gap-3">
		{#if languages}
			{#each languages as language}
				<Badge large color="indigo">{language}</Badge>
			{/each}
		{/if}
	</div>
</CardInfo>
