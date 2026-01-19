<script>
	export let value = '';
	export let useRef;
</script>

<input class="input" bind:this={useRef} bind:value {...$$restProps} />

<style>
	/* Base input */
	.input {
		--border: #d1d5db;
		--border-hover: #9ca3af;
		--border-focus: #6366f1; /* same indigo as button */
		--bg: #ffffff;
		--text: #111827;
		--placeholder: #9ca3af;
		--ring: rgba(99, 102, 241, 0.35);

		box-sizing: border-box;

		width: 100%;
		padding: 0.6rem 0.75rem;
		font-size: 0.95rem;
		font-weight: 500;

		color: var(--text);
		background-color: var(--bg);
		border: 1px solid var(--border);
		border-radius: 0.6rem;

		transition:
			border-color 150ms ease,
			box-shadow 150ms ease,
			background-color 150ms ease;
	}

	/* Placeholder */
	.input::placeholder {
		color: var(--placeholder);
	}

	/* Hover */
	.input:hover {
		border-color: var(--border-hover);
	}

	/* Focus */
	.input:focus {
		outline: none;
		border-color: var(--border-focus);
		box-shadow: 0 0 0 4px var(--ring);
	}

	/* Disabled */
	.input:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		background-color: #f9fafb;
	}

	/* Invalid state */
	.input:invalid {
		border-color: #ef4444;
	}

	.input:invalid:focus {
		box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.35);
	}

	/* Optional size variants */
	.input.sm {
		padding: 0.45rem 0.6rem;
		font-size: 0.85rem;
	}

	.input.lg {
		padding: 0.75rem 0.9rem;
		font-size: 1.05rem;
	}
</style>
