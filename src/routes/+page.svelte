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
	<h1>Welcome to SvelteKit Practicing</h1>
	<a href="/students">STUDENTS APP</a>

	<form action="?/logout" method="POST">
		<div class="flex justify-center">
			<button type="submit" class="py-2 px-4 border rounded"> Logout </button>
		</div>
	</form>
{/if}
