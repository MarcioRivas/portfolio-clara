'use server';

import { MailService } from '@/lib/send-mail';

export async function sendContactEmail(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const htmlContent = `
    <h1>Nuevo Mensaje de Contacto</h1>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `;

    try {
        // Send email to "her" (Clara)
        // Assuming the environment variable or defaulting to the email used previously
        const ownerEmail = process.env.OWNER_EMAIL || 'burutaranclara@gmail.com';

        await MailService.sendMail(ownerEmail, `Portfolio Contact: ${subject}`, htmlContent);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email. Please try again.' };
    }
}
