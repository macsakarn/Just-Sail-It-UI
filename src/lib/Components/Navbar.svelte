<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Search,
		Avatar,
		NavHamburger,
		Dropdown,
		A,
		DropdownItem
	} from 'flowbite-svelte';
	import { User } from 'lucide-svelte';
</script>

<Navbar let:hidden let:toggle navClass="fixed top-0 left-0 right-0 drop-shadow-md py-1.5">
	<NavBrand href="/">
		<img src="/image/logo.png" class="mr-3 h-6 sm:h-9 rounded-md" alt="Flowbite Logo" />
	</NavBrand>
	<div class="flex w-1/2">
		<Search size="md" placeholder="Search items, collections" />
	</div>
	<div class="flex items-center order-2">
		<Avatar id="avatar-menu" size="sm"><User /></Avatar>
		<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownItem><A href="/login">Login & Register</A></DropdownItem>
	</Dropdown>
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Art</NavLi>
		<NavLi href="/about">Sofrware</NavLi>
		<NavLi href="/services">Entertainment</NavLi>
	</NavUl>
</Navbar>
