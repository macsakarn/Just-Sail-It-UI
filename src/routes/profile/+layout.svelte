<script lang="ts">
	import { Avatar, P, A, Tabs, TabItem, Dropdown, DropdownItem, Label } from 'flowbite-svelte'
	import { page } from '$app/stores'
	$: path = $page.url.pathname
	$: user = $page.data.user

	function uploadProfile(event: Event) {
		const target = event.target as HTMLSelectElement
		target.form?.submit()
	}
</script>

<div
	class="h-72  bg-cover bg-no-repeat bg-center mb-28"
	style="background-image: url({user.image_cover});"
>
	<div class="relative -bottom-48 flex flex-col items-center h-auto gap-2">
		<Avatar src={user.image} id="placements" size="xl" border class="ring-web-white" />
		<Dropdown placement="right" triggeredBy="#placements">
			<form action="/api/profile/uploadProfile" method="POST" enctype="multipart/form-data">
				<DropdownItem type="button">
					<Label for="avatar">Upload Profile</Label>
					<input
						type="file"
						id="avatar"
						name="profile_image"
						accept="image/png, image/jpeg"
						on:change={uploadProfile}
						hidden
					/>
				</DropdownItem>
			</form>
			<form action="/api/profile/uploadCover" method="POST" enctype="multipart/form-data">
				<DropdownItem type="button">
					<Label for="cover">Upload Cover</Label>
					<input
						type="file"
						id="cover"
						name="cover_image"
						accept="image/png, image/jpeg"
						on:change={uploadProfile}
						hidden
					/>
				</DropdownItem>
			</form>
				
		</Dropdown>
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
