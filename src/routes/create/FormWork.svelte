<script lang="ts">
	import { Input, Label, Select, Textarea } from 'flowbite-svelte'


	let unit  = [
		{ value: 'wei', name: 'Wei' },
		{ value: 'gwei', name: 'Gwei' },
		{ value: 'ether', name: 'Ether' }
	]
</script>

<div class="space-y-7">
	<div class="grid grid-cols-6 gap-7">
        <div class="col-span-3">
			<Label for="project_title" class="mb-2">ตำแหน่งงาน</Label>
			<Input type="text" name="project_title" required />
		</div>
        <div class="col-span-2">
			<Label for="project_title" class="mb-2">รางวัล</Label>
			<Input type="text" name="project_title" required />
		</div>
		<Label>
			หน่วย
			<Select class="mt-2" items={unit} value="" />
		</Label>


	</div>
	<div class="">
		<Label for="description" class="mb-2">คำอธิบาย</Label>
		<Textarea rows="4" name="description" />
	</div>

</div>
