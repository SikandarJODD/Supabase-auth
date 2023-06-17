<script>
	import supabase from '$lib/db';
	import { onMount } from 'svelte';

	let ans;
	onMount(async () => {
		ans = await supabase.auth.user();
	});
</script>

{#await ans}
	loading....
{:then data}
	{#if ans !== null}
		<div class="badge badge-outline p-3">{data?.email}</div>
		<!-- content here -->

		<main class="prose">
			<h1>Login Successfully</h1>
			<h3>This Page Show only for Logged Users</h3>
		</main>
	{:else}
		<main class="prose">
			<h1>Not Logged In</h1>
			<h3>This Page Show only for Logged Users</h3>
		</main>
	{/if}
{:catch error}
	<main class="prose">
		<h1>Error Page</h1>
		<h3>This Page Show only for Logged Users</h3>
	</main>
{/await}
