<script lang="ts">
	export let data;

	const formatDate = (val: string | null) => {
		return val ? new Date(val).toLocaleString().split(',')[0] : null;
	};
</script>

{#each data.studentGrades as { subject_id, subject, grade, date_exam } (subject_id)}
	<a href="/students">
		<div class="flex">
			<p class="w-[500px]">{subject}</p>
			<p class="w-20">{grade ?? 'no grade'}</p>
			<p class="w-40">{formatDate(date_exam) ?? 'no grade'}</p>
		</div>
	</a>
{/each}
