<script>
	import { goto } from '$app/navigation';

	import supabase from '$lib/db.js';
	import { onMount } from 'svelte';
	// @ts-ignore
	export let data;
	$: products = data.prodcts;
	let email = '';
	let password = '';
	// @ts-ignore
	let currentData = async () => {
		// @ts-ignore
		const { data } = await supabase.auth.user;

		console.log(data);
	};
	let updateForm = async () => {
		// @ts-ignore
		const { data, error } = await supabase.auth.signUp({
			email: String(email),
			password: String(password),
			// @ts-ignore
			options: {
				emailRedirectTo: 'http://localhost:5173/signIn'
			}
		});
		email = '';
		password = '';
	};
	let isUser = async () => {
		const data = await supabase.auth.user();
		console.log(data);
	};
	onMount(() => {
		isUser();
	});
	let SignOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form on:submit|preventDefault={updateForm}>
	<label for="email"
		>Email :
		<input type="email" name="email" id="email" bind:value={email} />
	</label>
	<label for="password"
		>password :

		<input type="text" name="password" id="password" bind:value={password} />
	</label>
	<button type="submit">submit</button>
</form>
<a href="/signIn">SignIn</a>
<button on:click={SignOut}>Sign Out</button>
{#each products.data as item}
	<ul>
		<li>
			<p>{item.name} : {item.type}</p>
		</li>
	</ul>
{/each}
