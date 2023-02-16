<script lang="ts">
	import { Input, Label, NumberInput, Textarea, Dropzone } from 'flowbite-svelte'

</script>

<div class="space-y-7">
	<div class="col-span-5">
        <Label for="project_title" class="mb-2">Address ของ ETH</Label>
        <Input type="text" name="project_title" value="0x9F1aA1f2179B2A85f17835F5665b3b49C71ec448" required />
    </div>

    <div class="grid grid-cols-6 gap-7">
        <div class="col-span-4">
            <Label for="project_title" class="mb-2">เป้าหมาย</Label>
            <NumberInput  name="project_title" required />
        </div>
    
        <div class="col-span-2">
            <Label for="project_title" class="mb-2">ค่าบริการ</Label>
            <Input type="text" name="project_title" required />
        </div>
    </div>

</div>
