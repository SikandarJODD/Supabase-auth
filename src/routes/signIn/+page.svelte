<script>
	import { goto } from '$app/navigation';

	// @ts-nocheck

	import supabase from '$lib/db.js';
	let email = '';
	let password = '';
	// let currentData = async () => {
	// 	const { data } = await supabase.auth.user;

	// 	console.log(data);
	// };
	let signInBro = async () => {
		// @ts-ignore
		const { data, error } = await supabase.auth.signIn({
			email: String(email),
			password: String(password)
		});
		if (data) {
			console.log(data);
			goto('/');
		} else {
			console.log(error);
		}
		email = '';
		password = '';
		// currentData();
	};
</script>

<main class="prose">
	<h1>Sign In Form</h1>
	<form
		on:submit|preventDefault={signInBro}
		class="border-2 border-slate-800 w-fit p-6 rounded-2xl bg-sky-100 shadow-md mb-3"
	>
		<label for="email" class="font-bold block my-1"
			>Email :
			<input
				type="email"
				name="email"
				id="email"
				bind:value={email}
				placeholder="Type here"
				class="input input-bordered input-success max-w-xs"
			/>
		</label>
		<label for="password" class="font-bold block my-1"
			>Password :

			<input
				type="text"
				name="password"
				id="password"
				bind:value={password}
				placeholder="Type here"
				class="input input-bordered input-success max-w-xs"
			/>
		</label>
		<button type="submit" class="btn btn-outline btn-sm capitalize my-3">submit</button>
	</form>
</main>
