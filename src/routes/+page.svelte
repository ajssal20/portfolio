<script>
	const projects = [
		{
			title: 'SEO',
			url: 'https://seo-seo.vercel.app/',
			type: 'Optimierung',
			description: 'Eine Arbeit mit Blick auf Sichtbarkeit, Inhalte und technische Grundlagen.',
			accent: '01'
		},
		{
			title: 'Videocall App',
			url: 'https://videocall-two-pi.vercel.app/',
			type: 'Kommunikation',
			description: 'Eine Web-App rund um direkte digitale Verbindung und klare Bedienung.',
			accent: '02'
		},
		{
			title: 'Web Projekt',
			url: 'https://web-projekt-theta.vercel.app/',
			type: 'Frontend',
			description: 'Eine moderne Webumsetzung mit Fokus auf Struktur, Layout und Nutzerfluss.',
			accent: '03'
		},
		{
			title: 'Wuerfel',
			url: 'https://wuerfel-steel.vercel.app/',
			type: 'Interaktiv',
			description: 'Ein spielerisches Projekt mit Zufall, klarer Darstellung und direkter Aktion.',
			accent: '04'
		},
		{
			title: 'Position Point',
			url: 'https://positionpoint.vercel.app/',
			type: 'Layout',
			description: 'Ein visuelles Projekt zu Positionierung, Raum und praeziser Platzierung.',
			accent: '05'
		}
	];

	const skillGroups = [
		{
			title: 'Frontend',
			copy: 'Saubere Oberflaechen mit Fokus auf Struktur, Lesbarkeit und responsives Verhalten.',
			items: ['HTML', 'CSS', 'Svelte']
		},
		{
			title: 'Design',
			copy: 'Seiten mit klarer Bildsprache, ruhigem Aufbau und besserem Nutzerfluss.',
			items: ['Layout', 'Farbkonzept', 'Responsive Design']
		},
		{
			title: 'Arbeitsweise',
			copy: 'Projekte werden organisiert umgesetzt, getestet und praesentiert.',
			items: ['Projektarbeit', 'Sorgfalt', 'Weiterentwicklung']
		}
	];

	const highlights = [
		{ value: '5', label: 'Projekte online' },
		{ value: '20', label: 'Jahre alt' },
		{ value: '3', label: 'Staerken im Fokus' }
	];
</script>

<svelte:head>
	<title>Ajsi Sala | Portfolio</title>
	<meta
		name="description"
		content="Portfolio von Ajsi Sala mit Projekten in Frontend, Webdesign, SEO und interaktiven Webanwendungen."
	/>
</svelte:head>

<main class="site-shell">
	<nav class="nav" aria-label="Hauptnavigation">
		<a class="brand" href="/">Ajsi Sala</a>
		<div class="nav-links">
			<a href="#skills">Skills</a>
			<a href="#projekte">Projekte</a>
			<a href="#ueber-mich">Ueber mich</a>
			<a class="nav-cta" href="/kontakt">Kontakt</a>
		</div>
	</nav>

	<section class="hero">
		<div class="hero-copy">
			<p class="eyebrow">Maturantin · Webdesign · Frontend</p>
			<h1>Digitale Arbeiten mit Charakter, Klarheit und einer starken visuellen Richtung.</h1>
			<p class="intro">
				Ich bin Ajsi Sala und entwickle moderne Webprojekte, die Design und Technik sichtbar
				zusammenbringen. Mir ist wichtig, dass eine Seite nicht nur funktioniert, sondern einen
				eigenen Eindruck hinterlaesst.
			</p>

			<div class="hero-actions">
				<a class="primary" href="#projekte">Meine Arbeiten</a>
				<a class="secondary" href="#skills">Skills ansehen</a>
			</div>

			<div class="hero-highlights" aria-label="Kurzprofil">
				{#each highlights as item}
					<div class="highlight-card">
						<strong>{item.value}</strong>
						<span>{item.label}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="portrait-panel" aria-label="Portfolio Vorschau">
			<div class="panel-backdrop"></div>
			<div class="panel-grid" aria-hidden="true">
				<div class="panel-cell large"></div>
				<div class="panel-cell"></div>
				<div class="panel-cell outline"></div>
				<div class="panel-cell small"></div>
			</div>
			<div class="status-card">
				<span>Aktuell</span>
				<strong>Portfolio mit Frontend, SEO und Webprojekten</strong>
				<p>Strukturierte Arbeiten mit klarer Gestaltung und Fokus auf Nutzererlebnis.</p>
			</div>
		</div>
	</section>

	<section id="ueber-mich" class="about-section">
		<div class="section-heading">
			<p class="section-label">Ueber mich</p>
			<h2>Neugierig, organisiert und bereit, gute Ideen sauber umzusetzen.</h2>
		</div>

		<div class="about-grid">
			<article class="about-card main">
				<p>
					Als Maturantin verbinde ich schulische Projekte, eigene Ideen und praktische
					Webarbeiten. Ich arbeite gern an Seiten, die klar wirken, modern aussehen und auf
					verschiedenen Geraeten gut funktionieren.
				</p>
			</article>

			<article class="about-card">
				<span class="about-kicker">Fokus</span>
				<h3>Was mir wichtig ist</h3>
				<p>Saubere Oberflaechen, gute Lesbarkeit, klare Inhalte und eine ruhige Struktur.</p>
			</article>

			<article class="about-card">
				<span class="about-kicker">Ziel</span>
				<h3>Wie ich arbeite</h3>
				<p>Ich entwickle Seiten Schritt fuer Schritt und achte auf Wirkung, Funktion und Details.</p>
			</article>
		</div>
	</section>

	<section id="skills" class="skills-section">
		<div class="section-heading split">
			<div>
				<p class="section-label">Skills</p>
				<h2>Staerken, die nicht nur genannt, sondern sichtbar praesentiert werden.</h2>
			</div>
			<p class="section-copy">
				Statt nur einzelne Begriffe zu zeigen, sind meine Skills nach Themen geordnet. So wird
				schneller sichtbar, wie ich Design, Technik und Arbeitsweise verbinde.
			</p>
		</div>

		<div class="skills-grid">
			{#each skillGroups as group}
				<article class="skill-card">
					<div class="skill-card-head">
						<span class="skill-badge">{group.title}</span>
						<p>{group.copy}</p>
					</div>

					<div class="skill-list">
						{#each group.items as item}
							<span>{item}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="projekte" class="projects-section">
		<div class="section-heading split">
			<div>
				<p class="section-label">Projekte</p>
				<h2>Ausgewaehlte Arbeiten mit unterschiedlichem Schwerpunkt.</h2>
			</div>
			<p class="section-copy">
				Von SEO ueber Kommunikation bis zu interaktiven Ideen: Jedes Projekt zeigt einen anderen
				Teil meiner Arbeit.
			</p>
		</div>

		<div class="project-grid">
			{#each projects as project}
				<article class="project-card">
					<div class="project-visual" aria-hidden="true">
						<div class="project-orb"></div>
						<div class="project-lines">
							<span></span>
							<span></span>
							<span></span>
						</div>
						<strong>{project.accent}</strong>
					</div>
					<div class="project-content">
						<span>{project.type}</span>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<a href={project.url} target="_blank" rel="noreferrer">Projekt oeffnen</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="contact-band">
		<div>
			<p class="section-label light">Kontakt</p>
			<h2>Hast du eine Idee, eine Frage oder moechtest du mit mir arbeiten?</h2>
		</div>
		<a href="/kontakt">Zum Kontaktformular</a>
	</section>
</main>

<style>
	.site-shell {
		--teal: #245756;
		--teal-soft: #d8ebe7;
		--red: #b73535;
		--ink: #1f1a17;
		--paper: rgba(255, 250, 245, 0.82);
		--line: rgba(36, 87, 86, 0.14);
		width: min(1180px, calc(100% - 32px));
		margin: 0 auto;
		padding: 20px 0 56px;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		padding: 10px 0 24px;
	}

	.brand {
		font-size: 1.05rem;
		font-weight: 900;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: flex-end;
		font-weight: 700;
	}

	.nav-links a {
		border-radius: 999px;
		padding: 10px 14px;
		transition:
			transform 0.2s ease,
			background 0.2s ease;
	}

	.nav-links a:hover,
	.primary:hover,
	.secondary:hover,
	.project-card:hover,
	.contact-band a:hover,
	.skill-card:hover {
		transform: translateY(-2px);
	}

	.nav-cta,
	.primary,
	.contact-band a {
		background: var(--teal);
		color: #fff;
		box-shadow: 0 16px 32px rgba(36, 87, 86, 0.18);
	}

	.hero {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
		gap: 28px;
		align-items: center;
		padding: 24px 0 10px;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		width: 220px;
		height: 220px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(183, 53, 53, 0.16), transparent 68%);
		filter: blur(10px);
		pointer-events: none;
	}

	.eyebrow,
	.section-label {
		margin: 0 0 12px;
		color: var(--red);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.78rem;
		letter-spacing: 0.14em;
	}

	.section-label.light {
		color: rgba(255, 255, 255, 0.72);
	}

	h1,
	h2,
	h3,
	p {
		overflow-wrap: anywhere;
	}

	h1 {
		max-width: 780px;
		margin: 0;
		font-size: clamp(2.8rem, 7vw, 6.3rem);
		line-height: 0.92;
		letter-spacing: -0.04em;
		color: var(--ink);
	}

	h2 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 3.4rem);
		line-height: 0.98;
		letter-spacing: -0.03em;
	}

	.intro,
	.section-copy,
	.about-card p,
	.project-content p,
	.status-card p {
		color: #5a5049;
		line-height: 1.75;
	}

	.intro {
		max-width: 620px;
		margin: 24px 0 0;
		font-size: 1.12rem;
	}

	.hero-actions {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		margin-top: 30px;
	}

	.primary,
	.secondary,
	.contact-band a {
		border-radius: 999px;
		padding: 14px 20px;
		font-weight: 800;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.secondary {
		border: 1px solid rgba(22, 21, 20, 0.12);
		background: rgba(255, 255, 255, 0.56);
		backdrop-filter: blur(10px);
	}

	.hero-highlights {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
		margin-top: 28px;
	}

	.highlight-card {
		border: 1px solid rgba(183, 53, 53, 0.14);
		border-radius: 24px;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.48));
		padding: 18px;
		box-shadow: 0 18px 36px rgba(25, 24, 22, 0.07);
	}

	.highlight-card strong {
		display: block;
		font-size: 1.8rem;
		line-height: 1;
		color: var(--teal);
	}

	.highlight-card span {
		display: block;
		margin-top: 8px;
		color: #6a6059;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.portrait-panel {
		position: relative;
		min-height: 520px;
		border-radius: 36px;
		overflow: hidden;
		background:
			linear-gradient(180deg, rgba(36, 87, 86, 0.12), rgba(183, 53, 53, 0.12)),
			#dfd5c8;
		box-shadow: 0 30px 90px rgba(22, 21, 20, 0.16);
	}

	.panel-backdrop {
		position: absolute;
		inset: auto -10% 56% auto;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.24);
		backdrop-filter: blur(4px);
		z-index: 1;
	}

	.panel-grid {
		position: absolute;
		inset: 28px;
		z-index: 1;
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		grid-template-rows: 1fr 0.9fr;
		gap: 16px;
	}

	.panel-cell {
		border-radius: 28px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.56), rgba(255, 255, 255, 0.18));
		border: 1px solid rgba(255, 255, 255, 0.46);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.panel-cell.large {
		grid-row: span 2;
		background:
			radial-gradient(circle at 30% 30%, rgba(183, 53, 53, 0.26), transparent 34%),
			linear-gradient(160deg, rgba(36, 87, 86, 0.28), rgba(255, 255, 255, 0.12));
	}

	.panel-cell.outline {
		background: transparent;
		border: 1px dashed rgba(36, 87, 86, 0.38);
	}

	.panel-cell.small {
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(36, 87, 86, 0.2)),
			rgba(255, 255, 255, 0.18);
	}

	.status-card {
		position: absolute;
		left: 22px;
		right: 22px;
		bottom: 22px;
		z-index: 2;
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 24px;
		background: rgba(255, 250, 245, 0.85);
		padding: 20px 22px;
		backdrop-filter: blur(18px);
	}

	.status-card span,
	.project-content span,
	.about-kicker,
	.skill-badge {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		border-radius: 999px;
		background: rgba(183, 53, 53, 0.1);
		color: var(--red);
		padding: 6px 10px;
		font-size: 0.76rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.status-card strong {
		display: block;
		margin-top: 10px;
		font-size: 1.38rem;
		line-height: 1.15;
	}

	.status-card p {
		margin: 10px 0 0;
		max-width: 360px;
	}

	.about-section,
	.skills-section,
	.projects-section {
		padding-top: 64px;
	}

	.section-heading {
		margin-bottom: 22px;
	}

	.section-heading.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr);
		gap: 28px;
		align-items: end;
	}

	.section-copy {
		margin: 0;
		font-size: 1rem;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr 1fr;
		gap: 16px;
	}

	.about-card {
		border: 1px solid var(--line);
		border-radius: 28px;
		background: var(--paper);
		padding: 22px;
		box-shadow: 0 18px 42px rgba(22, 21, 20, 0.07);
	}

	.about-card.main {
		background:
			linear-gradient(135deg, rgba(36, 87, 86, 0.11), rgba(255, 255, 255, 0.7)),
			var(--paper);
	}

	.about-card h3,
	.project-content h3 {
		margin: 14px 0 0;
		font-size: 1.45rem;
	}

	.about-card p {
		margin: 14px 0 0;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}

	.skill-card {
		position: relative;
		border: 1px solid rgba(36, 87, 86, 0.18);
		border-radius: 30px;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(236, 245, 242, 0.74)),
			#fff;
		padding: 22px;
		box-shadow: 0 22px 48px rgba(22, 21, 20, 0.08);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.skill-card::after {
		content: '';
		position: absolute;
		right: 18px;
		top: 18px;
		width: 54px;
		height: 54px;
		border-radius: 18px;
		background: linear-gradient(135deg, rgba(183, 53, 53, 0.14), rgba(36, 87, 86, 0.16));
	}

	.skill-card-head {
		position: relative;
		z-index: 1;
		padding-right: 68px;
	}

	.skill-card-head p {
		margin: 16px 0 0;
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
	}

	.skill-list span {
		border-radius: 999px;
		background: var(--teal-soft);
		color: var(--teal);
		padding: 10px 14px;
		font-weight: 800;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}

	.project-card {
		display: grid;
		grid-template-rows: 180px 1fr;
		min-height: 380px;
		overflow: hidden;
		border: 1px solid rgba(36, 87, 86, 0.12);
		border-radius: 30px;
		background: rgba(255, 255, 255, 0.78);
		box-shadow: 0 18px 42px rgba(22, 21, 20, 0.1);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.project-visual {
		position: relative;
		overflow: hidden;
		background:
			linear-gradient(135deg, rgba(36, 87, 86, 0.16), rgba(183, 53, 53, 0.14)),
			#efe4d7;
	}

	.project-orb {
		position: absolute;
		left: -28px;
		top: -18px;
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(183, 53, 53, 0.42), rgba(183, 53, 53, 0) 70%);
	}

	.project-lines {
		position: absolute;
		right: 22px;
		top: 22px;
		display: grid;
		gap: 10px;
	}

	.project-lines span {
		display: block;
		width: 72px;
		height: 8px;
		border-radius: 999px;
		background: rgba(36, 87, 86, 0.24);
	}

	.project-lines span:nth-child(2) {
		width: 92px;
	}

	.project-lines span:nth-child(3) {
		width: 54px;
	}

	.project-visual strong {
		position: absolute;
		left: 22px;
		bottom: 18px;
		font-size: 3rem;
		line-height: 1;
		letter-spacing: -0.06em;
		color: rgba(31, 26, 23, 0.72);
	}

	.project-card:hover,
	.skill-card:hover {
		box-shadow: 0 28px 56px rgba(22, 21, 20, 0.14);
	}

	.project-content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 22px;
	}

	.project-content p {
		margin: 0;
	}

	.project-content a {
		width: fit-content;
		margin-top: auto;
		color: var(--teal);
		font-weight: 900;
	}

	.contact-band {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 20px;
		align-items: center;
		margin-top: 64px;
		border-radius: 36px;
		background:
			linear-gradient(135deg, rgba(36, 87, 86, 0.96), rgba(28, 43, 42, 0.96)),
			#2e2b28;
		color: #fff;
		padding: 34px;
		box-shadow: 0 28px 60px rgba(15, 21, 20, 0.2);
	}

	.contact-band h2 {
		max-width: 680px;
		font-size: clamp(1.8rem, 4vw, 3rem);
	}

	.contact-band a {
		flex: 0 0 auto;
		background: #c8463d;
	}

	@media (max-width: 980px) {
		.hero,
		.section-heading.split,
		.about-grid {
			grid-template-columns: 1fr;
		}

		.hero {
			padding-top: 18px;
		}

		.portrait-panel {
			min-height: 380px;
		}

		.skills-grid,
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.site-shell {
			width: min(100% - 24px, 1180px);
			padding-top: 14px;
		}

		.nav {
			align-items: flex-start;
			flex-direction: column;
		}

		.nav-links {
			justify-content: flex-start;
		}

		.hero-highlights,
		.skills-grid,
		.project-grid,
		.contact-band {
			grid-template-columns: 1fr;
		}

		.contact-band {
			padding: 26px;
		}

		.portrait-panel {
			border-radius: 28px;
			min-height: 320px;
		}

		.panel-grid {
			inset: 18px;
			gap: 12px;
		}
	}
</style>
