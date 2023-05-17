<script lang="ts">
	export let data;

	$: allStudents = data.allStudents || [];
</script>

{#each allStudents as { student_id, first_name, last_name, email, phone } (student_id)}
	<a href="/students/{student_id}">
		<div class="flex">
			<p class="w-20">{student_id}</p>
			<p class="w-32">{first_name}</p>
			<p class="w-32">{last_name}</p>
			<p class="w-64">{email}</p>
			<p class="w-40">{phone}</p>
		</div>
	</a>
{/each}
