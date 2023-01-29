<script lang="ts">
	import { Wallet, FileEdit, Check } from 'lucide-svelte'

	export let step = 0
</script>

<ol class="flex items-center max-w-3xl w-full">
	<li
		class="flex w-full items-center {step === 0
			? 'text-blue-600 after:border-blue-100'
			: 'text-web-black'} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block "
	>
		<span
			class="flex items-center justify-center w-10 h-10 {step === 0
				? 'bg-blue-100'
				: 'bg-gray-100'} rounded-full lg:h-12 lg:w-12  shrink-0"
		>
			<Wallet />
		</span>
	</li>
	<li
		class="flex w-full items-center after:content-['']  
		  after:w-full after:h-1 after:border-b  after:border-4 after:inline-block {step === 1
			? 'text-blue-600 after:border-blue-100'
			: 'text-web-black after:border-gray-100'}"
	>
		<span
			class="flex items-center justify-center w-10 h-10 {step === 1
				? 'bg-blue-100'
				: 'bg-gray-100'} rounded-full lg:h-12 lg:w-12 0 shrink-0"
		>
			<FileEdit />
		</span>
	</li>
	<li
		class="flex items-center {step === 2
			? 'text-blue-600 after:border-blue-100'
			: 'text-web-black after:border-gray-100'}"
	>
		<span
			class="flex items-center justify-center {step === 2
				? 'bg-blue-100'
				: 'bg-gray-100'} w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0"
		>
			<Check />
		</span>
	</li>
</ol>
