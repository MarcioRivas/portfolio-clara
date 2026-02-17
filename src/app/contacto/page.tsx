'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Send, User, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { sendContactEmail } from './actions';

const CLARA_EMAIL = "burutaranclara@gmail.com";
const PHONE_NUMBER = "+59899790504";
const LINKEDIN_URL = "https://www.linkedin.com/in/ana-clara-burutaran-tallac-7b3441221/";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);

        try {
            const result = await sendContactEmail(null, data);

            if (result.success) {
                setStatus("submitted");
                setTimeout(() => {
                    setStatus("idle");
                    setFormData({ name: '', email: '', subject: '', message: '' });
                }, 3000);
            } else {
                console.error(result.message);
                setStatus("idle");
                alert(result.message || "Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            console.error(error);
            setStatus("idle");
            alert("Hubo un error inesperado. Por favor intenta nuevamente.");
        }
    };

    return (
        <div className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Information Section */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Hablemos
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            ¿Tienes una idea en mente? Me encantaría escuchar sobre tu proyecto y ver cómo podemos trabajar juntos.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-none shadow-md bg-muted/50 backdrop-blur-sm">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <FaEnvelope className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <a href={`mailto:${CLARA_EMAIL}`} className="text-lg font-semibold hover:text-primary transition-colors">
                                        {CLARA_EMAIL}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md bg-muted/50 backdrop-blur-sm">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <RiWhatsappFill className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Teléfono / WhatsApp</p>
                                    <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">
                                        +598 99 790 504
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md bg-muted/50 backdrop-blur-sm">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <FaLinkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">
                                        Ver Perfil
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div>
                    <Card className="border-none shadow-xl bg-card p-6">
                        <CardHeader>
                            <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
                            <CardDescription>
                                Completa el formulario y te responderé a la brevedad.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Nombre
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Tu nombre"
                                                className="pl-10 h-10 border-input/60 focus:border-primary transition-colors"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="tu@email.com"
                                                className="pl-10 h-10 border-input/60 focus:border-primary transition-colors"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Asunto
                                    </label>
                                    <div className="relative">
                                        <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="¿De qué trata tu proyecto?"
                                            className="pl-10 h-10 border-input/60 focus:border-primary transition-colors"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Mensaje
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntame más detalles..."
                                        className="min-h-[150px] resize-y border-input/60 focus:border-primary transition-colors"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold py-6 shadow-lg hover:shadow-xl"
                                    disabled={status === "submitting"}
                                >
                                    {status === "submitting" ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                                {status === "submitted" && (
                                    <p className="text-sm text-green-600 text-center mt-2 font-medium">
                                        ¡Mensaje enviado con éxito!
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
