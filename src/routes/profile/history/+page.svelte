<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte'
</script>

<div class="container">
	<Table>
		<TableHead>
			<TableHeadCell>Date</TableHeadCell>
			<TableHeadCell>Project Name</TableHeadCell>
			<TableHeadCell>Donate Amount</TableHeadCell>
		</TableHead>
		<TableBody>
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</div>
