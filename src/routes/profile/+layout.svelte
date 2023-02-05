<script lang="ts">
	import { Avatar, P, A, Tabs, TabItem } from 'flowbite-svelte'
	import { page } from '$app/stores'
	$: path = $page.url.pathname
	$: user = $page.data.user
</script>

<div
	class="h-60  bg-cover bg-no-repeat bg-center mb-28"
	style="background-image: url({user.image_cover});"
>
	<div class="relative -bottom-36 flex flex-col items-center h-auto gap-2">
		<Avatar src={user.image} size="xl" border class="ring-web-white" />
		<A aClass="text-xs">@{user.userId}</A>
		<P size="2xl">{user.username}</P>
	</div>
</div>

<div class="container">
	<Tabs style="underline" contentClass="p-4">
		<a href="/profile/info">
			<TabItem open={path === '/profile/info' ? true : false} title="โปรไฟล์" />
		</a>
		<a href="/profile/history">
			<TabItem open={path === '/profile/history' ? true : false} title="ประวัติ" />
		</a>
		<a href="/profile/projects">
			<TabItem open={path === '/profile/projects' ? true : false} title="โครงการ" />
		</a>
	</Tabs>
</div>

<slot />
