<script lang="ts">
	import { AccordionGroup, AccordionItem } from '@skeletonlabs/skeleton';
	const chapters_numbers = [5, 7, 8, 9, 10];
</script>

<svelte:head>
	<title>MATH102</title>
</svelte:head>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">Welcome to MATH102 Course.</h2>
		<div>
			{#each chapters_numbers as chap}
				<AccordionGroup>
					<!-- Open -->
					<AccordionItem class="card variant-filled-secondary p-1 mb-2">
						<svelte:fragment slot="summary">Chapter {chap}</svelte:fragment>
						<svelte:fragment slot="content">
							<div class="flex justify-end">
								<span class="chip p-1">
									<a class="btn variant-soft-secondary" href="ch{chap}.html">Go to Page.</a>
								</span>
							</div>
						</svelte:fragment>
					</AccordionItem>
				</AccordionGroup>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply bg-gradient-to-r from-primary-300 to-warning-300;
		@apply absolute z-[-1] rounded-full blur-[64px];
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
