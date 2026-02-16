import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-background overflow-hidden">
            {/* Absolute positioning for the arched text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <svg viewBox="0 0 1000 400" className="w-full h-full opacity-90">
                    <defs>
                        {/* Defined a wider, flatter curve for a bigger arch */}
                        <path id="curve" d="M 50,350 Q 500,-100 950,350" />
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-primary)" />
                            <stop offset="100%" stopColor="var(--color-secondary)" />
                        </linearGradient>
                    </defs>
                    <text width="1000">
                        <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-2xl md:text-6xl font-extrabold tracking-tight" fill="url(#textGradient)">
                            Hola, soy Clari!
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="container relative mx-auto px-6 z-10 text-center max-w-4xl animate-fade-in mt-32 md:mt-48">
                <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-10 max-w-2xl mx-auto">
                    Diseñadora Gráfica & Creativa Visual
                </p>

                <div className="mt-8 mx-auto text-md md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl space-y-6">
                    <p>
                        Estudiante de la Licenciatura en Diseño en Comunicación Visual en la Facultad de Arquitectura, Diseño y Urbanismo.

                        Te invito a conocer mis proyectos y mi forma de pensar el diseño.
                    </p>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 pointer-events-auto">
                        <Link href="#proyectos">
                            Ver Mis Proyectos
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg hover:bg-muted/50 border-muted-foreground/20 hover:border-primary/50 transition-all duration-300 pointer-events-auto">
                        <Link href="#contact">
                            Contactar Ahora
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
