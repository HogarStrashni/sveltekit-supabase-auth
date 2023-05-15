<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { invalidate } from '$app/navigation';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => subscription.unsubscribe();
	});
</script>

<slot />
