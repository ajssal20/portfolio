<script>
	let { form } = $props();
</script>

<svelte:head>
	<title>Kontakt | Ajsi Sala</title>
	<meta name="description" content="Kontaktformular fuer Ajsi Sala." />
</svelte:head>

<main class="contact-page">
	<nav class="nav" aria-label="Hauptnavigation">
		<a class="brand" href="/">Ajsi Sala</a>
		<div class="nav-links">
			<a href="/">Portfolio</a>
			<a href="/#projekte">Projekte</a>
		</div>
	</nav>

	<section class="contact-hero">
		<div>
			<p class="eyebrow">Kontakt</p>
			<h1>Lass uns ueber dein Anliegen sprechen.</h1>
			<p>
				Schreib mir eine Nachricht zu Projekten, Zusammenarbeit oder Fragen zu meinen Arbeiten.
			</p>
		</div>

		<form method="POST">
			{#if form?.success}
				<p class="form-message success">{form.success}</p>
			{/if}

			{#if form?.error}
				<p class="form-message error">{form.error}</p>
			{/if}

			<label>
				Name
				<input
					name="name"
					type="text"
					placeholder="Dein Name"
					required
					value={form?.values?.name ?? ''}
				/>
			</label>

			<label>
				E-Mail
				<input
					name="email"
					type="email"
					placeholder="deine@email.com"
					required
					value={form?.values?.email ?? ''}
				/>
			</label>

			<label>
				Nachricht
				<textarea
					name="nachricht"
					rows="6"
					placeholder="Worum geht es?"
					required
				>{form?.values?.nachricht ?? ''}</textarea>
			</label>

			<button type="submit">Nachricht senden</button>
		</form>
	</section>
</main>

<style>
	.contact-page {
		width: min(1120px, calc(100% - 32px));
		margin: 0 auto;
		padding: 24px 0 60px;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		padding: 14px 0 44px;
	}

	.brand {
		font-size: 1.05rem;
		font-weight: 800;
	}

	.nav-links {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		font-weight: 800;
	}

	.nav-links a {
		border-radius: 8px;
		padding: 10px 14px;
		background: rgba(255, 255, 255, 0.58);
	}

	.contact-hero {
		display: grid;
		grid-template-columns: 0.9fr 1fr;
		gap: 44px;
		align-items: start;
	}

	.eyebrow {
		margin: 0 0 12px;
		color: #b73535;
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.78rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(2.4rem, 6vw, 5.3rem);
		line-height: 0.98;
		letter-spacing: 0;
		overflow-wrap: anywhere;
	}

	p {
		max-width: 560px;
		margin: 24px 0 0;
		color: #4d4741;
		font-size: 1.13rem;
		line-height: 1.75;
	}

	form {
		display: grid;
		gap: 18px;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.78);
		padding: 28px;
		box-shadow: 0 20px 55px rgba(22, 21, 20, 0.12);
	}

	label {
		display: grid;
		gap: 8px;
		color: #2e2b28;
		font-weight: 850;
	}

	input,
	textarea {
		width: 100%;
		border: 1px solid rgba(22, 21, 20, 0.16);
		border-radius: 8px;
		background: #fffdfa;
		color: #161514;
		padding: 13px 14px;
		outline: none;
	}

	input:focus,
	textarea:focus {
		border-color: #245756;
		box-shadow: 0 0 0 4px rgba(36, 87, 86, 0.13);
	}

	textarea {
		resize: vertical;
	}

	button {
		width: fit-content;
		border: 0;
		border-radius: 8px;
		background: #245756;
		color: #fff;
		padding: 13px 18px;
		font-weight: 900;
		cursor: pointer;
		box-shadow: 0 12px 24px rgba(36, 87, 86, 0.18);
	}

	.form-message {
		margin: 0;
		border-radius: 8px;
		padding: 12px 14px;
		font-size: 0.98rem;
		font-weight: 700;
	}

	.form-message.success {
		background: rgba(36, 87, 86, 0.12);
		color: #1f4d4c;
	}

	.form-message.error {
		background: rgba(183, 53, 53, 0.12);
		color: #8f2323;
	}

	@media (max-width: 820px) {
		.contact-hero {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.contact-page {
			width: min(100% - 24px, 1120px);
			padding-top: 14px;
		}

		.nav {
			align-items: flex-start;
			flex-direction: column;
		}

		form {
			padding: 18px;
		}
	}
</style>
