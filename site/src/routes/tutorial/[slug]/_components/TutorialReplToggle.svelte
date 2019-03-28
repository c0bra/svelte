<script>
	export let checked;
	export let left = 'Tutorial';
	export let right = 'REPL';
</script>

<style>
	.input-output-toggle {
		display: grid;
		/* position: absolute; */
		user-select: none;
		grid-template-columns: 1fr 40px 1fr;
		grid-gap: 0.5em;
		align-items: center;
		width: 100vw;
		height: 4.2rem;
		border-top: 1px solid var(--second);
	}

	input {
		display: block;
	}

	span {
		color: #ccc;
	}

	.active {
		color: #555;
	}

	@media (min-width: 600px) {
		.input-output-toggle {
			display: none;
		}
	}
</style>

<label class="input-output-toggle">
	<span class:active={!checked} style="text-align: right">{left}</span>
	<input type="checkbox" bind:checked>
	<span class:active={checked}>{right}</span>
</label>
