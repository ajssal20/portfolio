import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';

const getTrimmedValue = (value) => (typeof value === 'string' ? value.trim() : '');

const hasSmtpConfig = () =>
	env.SMTP_HOST &&
	env.SMTP_PORT &&
	env.SMTP_USER &&
	env.SMTP_PASS &&
	env.CONTACT_RECEIVER;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const values = {
			name: getTrimmedValue(formData.get('name')),
			email: getTrimmedValue(formData.get('email')),
			nachricht: getTrimmedValue(formData.get('nachricht'))
		};

		if (!values.name || !values.email || !values.nachricht) {
			return fail(400, {
				error: 'Bitte fuelle alle Felder aus.',
				values
			});
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(values.email)) {
			return fail(400, {
				error: 'Bitte gib eine gueltige E-Mail-Adresse ein.',
				values
			});
		}

		if (!hasSmtpConfig()) {
			return fail(500, {
				error: 'Die Mail-Konfiguration fehlt auf dem Server.',
				values
			});
		}

		const port = Number(env.SMTP_PORT);
		const transporter = nodemailer.createTransport({
			host: env.SMTP_HOST,
			port,
			secure: port === 465,
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASS
			}
		});

		try {
			await transporter.sendMail({
				from: `"Portfolio Kontakt" <${env.SMTP_USER}>`,
				to: env.CONTACT_RECEIVER,
				replyTo: values.email,
				subject: `Neue Nachricht von ${values.name}`,
				text: [
					`Name: ${values.name}`,
					`E-Mail: ${values.email}`,
					'',
					'Nachricht:',
					values.nachricht
				].join('\n'),
				html: `
					<p><strong>Name:</strong> ${values.name}</p>
					<p><strong>E-Mail:</strong> ${values.email}</p>
					<p><strong>Nachricht:</strong></p>
					<p>${values.nachricht.replace(/\n/g, '<br />')}</p>
				`
			});

			return {
				success: 'Deine Nachricht wurde gesendet.',
				values: {
					name: '',
					email: '',
					nachricht: ''
				}
			};
		} catch (error) {
			console.error('Kontaktformular Versand fehlgeschlagen', error);

			return fail(500, {
				error: 'Die Nachricht konnte gerade nicht gesendet werden.',
				values
			});
		}
	}
};
