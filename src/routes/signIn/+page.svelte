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

<h1>Sign In Form</h1>
<form on:submit|preventDefault={signInBro}>
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
