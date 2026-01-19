<button class="btn" on:click {...$$restProps}>
	<slot />
</button>

<style>
	.btn {
		--bg: #6366f1; /* Indigo */
		--bg-hover: #4f46e5;
		--bg-active: #4338ca;
		--text: #ffffff;
		--ring: rgba(99, 102, 241, 0.45);

		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		padding: 0.6rem 1.1rem;
		font-size: 0.95rem;
		font-weight: 600;
		line-height: 1;

		color: var(--text);
		background: linear-gradient(135deg, var(--bg), var(--bg-hover));
		border: none;
		border-radius: 0.6rem;

		cursor: pointer;
		user-select: none;
		white-space: nowrap;

		transition:
			background 150ms ease,
			transform 120ms ease,
			box-shadow 150ms ease,
			opacity 120ms ease;
	}

	/* Hover */
	.btn:hover {
		background: linear-gradient(135deg, var(--bg-hover), var(--bg-active));
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	/* Active (press) */
	.btn:active {
		transform: translateY(1px) scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
	}

	/* Focus (keyboard accessibility) */
	.btn:focus-visible {
		outline: none;
		box-shadow: 0 0 0 4px var(--ring);
	}

	/* Disabled */
	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		box-shadow: none;
	}

	/* Optional size variants */
	.btn.sm {
		padding: 0.45rem 0.85rem;
		font-size: 0.85rem;
	}

	.btn.lg {
		padding: 0.75rem 1.4rem;
		font-size: 1.05rem;
	}
</style>
