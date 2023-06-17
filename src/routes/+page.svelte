<script>
	import { goto } from '$app/navigation';

	import supabase from '$lib/db.js';
	import { onMount } from 'svelte';
	// @ts-ignore
	export let data;
	$: products = data.prodcts;
	let email = '';
	let password = '';

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

<div class="prose">
	<div class="prose-pink prose-h1:flex">
		<h1>Sveltekit Supabase Auth</h1>
		<form
			on:submit|preventDefault={updateForm}
			class="border-2 border-slate-800 p-6 w-fit rounded-2xl bg-sky-100 shadow-md mb-3"
		>
			<label for="email" class="font-bold block my-1"
				>Email :
				<input
					type="email"
					name="email"
					id="email"
					bind:value={email}
					placeholder="Email"
					class="input input-bordered input-sm max-w-xs input-success"
				/>
			</label>
			<label for="password" class="font-bold my-1 block"
				>Password :

				<input
					type="text"
					name="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					class="input input-bordered input-sm max-w-xs"
				/>
			</label>
			<button type="submit" class="btn btn-sm capitalize btn-outline">submit</button>
		</form>
		<div class="flex">
			<div class="not-prose">
				<a href="/signIn" class="btn btn-sm capitalize m-3 btn-outline">SignIn</a>
			</div>
			<div class="not-prose">
				<button on:click={SignOut} class="btn btn-sm btn-primary capitalize m-3">Sign Out</button>
			</div>
		</div>
	</div>
</div>
