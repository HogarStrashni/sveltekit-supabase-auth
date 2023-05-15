<script lang="ts">
	export let data;
</script>

{#if !data.session}
	<form action="?/login" method="POST">
		<div class="flex justify-center">
			<button type="submit" class="py-2 px-4 border rounded"> Click to log in </button>
		</div>
	</form>
{:else}
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<form action="?/logout" method="POST">
		<div class="flex justify-center">
			<button type="submit" class="py-2 px-4 border rounded"> Logout </button>
		</div>
	</form>
{/if}
