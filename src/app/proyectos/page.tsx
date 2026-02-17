import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import ZoomableImage from '@/components/ZoomableImage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function ProjectsPage() {
    return (
        <div className="py-24 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl pb-2 lg:mt-14">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Portafolio de Proyectos
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explora una colección detallada de mis trabajos en diseño gráfico, identidad visual y campañas sociales.
                    </p>
                </div>

                <div className="space-y-40 mt-20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            id={project.id}
                            className={`flex flex-col gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start scroll-mt-32`}
                        >
                            <div className="flex-1 space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 hover:bg-primary/20 rounded-full">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground">{project.title}</h2>
                                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Image Gallery Preview */}
                                <div className="grid grid-cols-2 gap-6">
                                    {project.images?.slice(1, 3).map((img, i) => (
                                        <Card key={i} className="relative aspect-video bg-muted overflow-hidden shadow-sm hover:shadow-md transition-shadow border-none">
                                            <ZoomableImage
                                                src={img}
                                                alt={`Galería ${i + 1}`}
                                                className="object-cover"
                                            />
                                        </Card>
                                    ))}
                                </div>


                                {/* Desktop Link */}
                                <Button variant="link" asChild className="hidden lg:inline-flex text-primary font-semibold hover:text-primary/80 transition-colors p-0 h-auto mt-2">
                                    <Link href={`/proyectos/${project.id}`}>
                                        Ver Estudio Completo
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="flex-1 w-full flex flex-col items-start gap-4">
                                <div className="relative group w-full">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                    <Card className="relative w-full aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-2xl border-none">
                                        <ZoomableImage
                                            src={project.imageUrl}
                                            alt={`Imagen de ${project.title}`}
                                            className="object-cover"
                                        />
                                    </Card>
                                </div>
                                {/* Mobile Link */}
                                <Button variant="link" asChild className="lg:hidden text-primary font-semibold hover:text-primary/80 transition-colors p-0 h-auto mt-2">
                                    <Link href={`/proyectos/${project.id}`}>
                                        Ver Estudio Completo
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
