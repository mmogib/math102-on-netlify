<script>
	import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">MATH102 (Calculus II)</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.kfupm.edu.sa"
					target="_blank"
					rel="noreferrer">KFUPM</a
				>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.kfupm.edu.sa/departments/math/default.aspx"
					target="_blank"
					rel="noreferrer">Math Department</a
				>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://faculty.kfupm.edu.sa/math/mshahrani/"
					target="_blank"
					rel="noreferrer">Personal Website</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
