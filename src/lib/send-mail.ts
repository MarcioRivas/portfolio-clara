import nodemailer from 'nodemailer';

export class MailService {
    public static async sendMail(to: string, subject: string, html: string): Promise<void> {
        // Configuración del transporter (usar variables de entorno en producción)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || '',
                pass: process.env.SMTP_PASS || '',
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_FROM || 'no-reply@menus.com', // Sender address
            to, // List of receivers
            subject, // Subject line
            html, // HTML body content
        });
    }
}
