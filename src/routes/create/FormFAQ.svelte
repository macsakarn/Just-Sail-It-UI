<script>
	import { Textarea, Tabs, TabItem } from 'flowbite-svelte'
	import SvelteMarkdown from 'svelte-markdown'

	let markdown = ''
</script>

<Tabs>
	<TabItem open title="แก้ไข">
		<label for="faq">เรื่องราวของคุณ</label>
		<Textarea id="faq" rows="15" class="mb-4" bind:value={markdown} />
	</TabItem>
	<TabItem title="ตัวอย่าง">
		<div class="prose">
			<SvelteMarkdown source={markdown} />
		</div>
	</TabItem>
</Tabs>
