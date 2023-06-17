<script>
	import '../app.postcss';
</script>

<div class="navbar bg-base-100 md:border-b-2 md:border-slate-800">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/" class="capitalize">Home</a></li>
				<li><a href="/signIn" class="capitalize">sign in</a></li>
			</ul>
		</div>
		<a
			class=" btn btn-outline normal-case text-xl text-gray-800 font-bold border-2 border-slate-800 hover:border-slate-800"
			href="/"
			>Sveltekit - Supabase
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li class="first:font-bold">
				<a
					href="/"
					class="capitalize mx-1 border-2 hover:border-2 hover:bg-slate-700 border-slate-700 mbox"
					>Home</a
				>
			</li>
			<li class="first:font-bold">
				<a
					href="/signIn"
					class="capitalize mx-1 border-2 hover:border-2 hover:bg-slate-700 border-slate-700 mbox"
					>sign In</a
				>
			</li>
			<li class="first:font-bold">
				<a
					href="/code"
					class="capitalize bg-emerald-300 mx-1 border-2 hover:border-2 hover:bg-slate-700 hover:text-white border-slate-700 mbox"
					>Code</a
				>
			</li>
		</ul>
	</div>
</div>
<main class="px-20 bg-sky-200 py-6">
	<slot />
</main>
