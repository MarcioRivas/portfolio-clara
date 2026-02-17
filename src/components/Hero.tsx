import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/background1.jpeg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                {/* Gradient Overlay to blend into the next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/80 to-[#fff7ed]"></div>
            </div>

            {/* Absolute positioning for the arched text - Visible only on Desktop */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-0 pb-2">
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
                        <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-6xl font-extrabold tracking-tight" fill="url(#textGradient)">
                            ¡Hola, soy Clari!
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="container relative mx-auto px-6 z-10 text-left md:text-center max-w-4xl animate-fade-in mt-20 md:mt-48">
                {/* Mobile Title - Standard Flow */}
                <h1 className="md:hidden text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Hola, soy Clari!
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-10 max-w-2xl md:mx-auto">
                    Diseñadora Gráfica & Creativa Visual
                </p>

                <div className="mt-8 md:mx-auto text-md md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl space-y-6">
                    <p>
                        Estudiante de la Licenciatura en Diseño en Comunicación Visual en la Facultad de Arquitectura, Diseño y Urbanismo.

                        Te invito a conocer mis proyectos y mi forma de pensar el diseño.
                    </p>
                </div>
                <Button asChild size="lg" className=" mt-12 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 pointer-events-auto">
                    <Link href="#proyectos">
                        Ver Mis Proyectos
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default Hero;
