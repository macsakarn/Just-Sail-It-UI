<script lang="ts">
	import { Heading, P, Card } from 'flowbite-svelte'
	export let data = {
		id: '1',
		title: 'testing by mac',
		description: 'lorem ipsum dolor sit amet, consectetur',
		image: 'https://source.unsplash.com/random',
		category: 'mac',
		balance: 10
	}
</script>

<!-- href="/{data.id}" -->
<Card class="card-zoom" padding="none" size="xs" border shadow>
	<div class="card-zoom-image bg-[url('https://source.unsplash.com/random')]" />
	<div class="p-5 absolute bottom-0  bg-web-white/70">
		<Heading tag="h6" class="mb-2" color="text-web-black">{data.title}</Heading>
		<P weight="light" class="line-clamp-2 mb-2" color="text-web-black">{data.description}</P>
		<P weight="medium" color="text-primary-50 mb-2">{data.category}</P>
		<P weight="semibold" color="text-primary-50">{data.balance} ETH</P>
	</div>
</Card>
