<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Avatar,
		NavHamburger,
		Dropdown,
		A,
		DropdownItem,
		DropdownHeader,
		DropdownDivider
	} from 'flowbite-svelte'
	import { page } from '$app/stores'
</script>

<Navbar
	let:hidden
	let:toggle
	navClass="fixed top-0 left-0 right-0 drop-shadow-md py-1.5 z-50 bg-web-white/90"
	color="form"
>
	<NavBrand href="/">
		<img src="/image/logo.png" class="mr-3 h-6 sm:h-9 rounded-md" alt="Flowbite Logo" />
	</NavBrand>

	<div class="flex items-center order-2">
		{#if !$page.data.user}
			<Avatar id="avatar-menu" size="sm" />
			<Dropdown placement="bottom" triggeredBy="#avatar-menu">
				<DropdownItem><A href="/login">Login & Register</A></DropdownItem>
			</Dropdown>
		{/if}

		{#if $page.data.user}
			<Avatar id="user-drop" src={$page.data.user.image} size="sm" />
			<Dropdown triggeredBy="#user-drop">
				<DropdownHeader>
					<span class="block text-sm line-clamp">{$page.data.user.userId} </span>
					<span class="block truncate text-sm font-medium">{$page.data.user.username}</span>
				</DropdownHeader>
				<DropdownItem href="/profile/info">Profile</DropdownItem>
				<DropdownItem href="/profile/history">History</DropdownItem>
				<DropdownItem href="/profile/projects">Projects</DropdownItem>
				<DropdownDivider />
				<form method="POST" action="/api/auth/logout">
					<DropdownItem>Sign out</DropdownItem>
				</form>
			</Dropdown>
		{/if}
	</div>

	<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	<NavUl {hidden}>
		<NavLi
			href="/"
			active={true}
			activeClass="text-primary bg-primary-700 md:bg-transparent md:text-primary-700">Home</NavLi
		>
		<NavLi
			href="/art"
			activeClass="text-primary bg-primary-700 md:bg-transparent md:text-primary-700">Art</NavLi
		>
		<NavLi
			href="/about"
			activeClass="text-primary bg-primary-700 md:bg-transparent md:text-primary-700"
			>Sofrware</NavLi
		>
		<NavLi
			href="/services"
			activeClass="text-primary bg-primary-700 md:bg-transparent md:text-primary-700"
			>Entertainment</NavLi
		>
	</NavUl>
</Navbar>
