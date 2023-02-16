<script lang="ts">
	import { Input, Label, Select, Textarea, Dropzone  } from 'flowbite-svelte'
	import { Upload } from 'lucide-svelte'

	let category = [
		{ value: 'art', name: 'ศิลปะ' },
		{ value: 'software', name: 'ซอฟต์แวร์' },
		{ value: 'entertainment', name: 'ความบันเทิง' }
	]
</script>

<div class="space-y-7">
    <div class="grid grid-cols-6 gap-7">
        <Label>
            เลือกหมวดหมู่
            <Select class="mt-2" items={category} value="" />
        </Label>
    
        <div class="col-span-5">
            <Label for="project_title" class="mb-2">ชื่อโครงการ</Label>
            <Input type="text" name="project_title" required />
        </div>
    </div>
    <div class="">
        <Label for="description" class="mb-2">คำอธิบาย</Label>
        <Textarea rows="4" name="description"/>
    </div>


    <div class="">
<Label for="description" class="mb-2">รูปภาพ</Label>
<Dropzone id='dropzone'>
    <Upload/>
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
  </Dropzone>
    </div>
   
</div>



