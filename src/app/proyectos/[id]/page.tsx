import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ZoomableImage from '@/components/ZoomableImage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Project Header */}
                <header className="mb-12 text-center animate-fade-in">
                    <div className="flex justify-center gap-2 mb-4 flex-wrap">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs uppercase tracking-wider">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {project.title}
                        </span>
                    </h1>
                    {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {project.longDescription || project.description}
                    </p> */}
                </header>

                {/* Image Carousel */}
                <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent>
                            {project.images?.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card className="border-none shadow-xl overflow-hidden relative aspect-video bg-muted">
                                            <ZoomableImage
                                                src={img}
                                                alt={`${project.title} - Imagen ${index + 1}`}
                                                className="object-cover"
                                            />
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {project.longDescription || project.description}
                </p>

                {/* Call to Action */}
                <div className="text-center mt-12 pt-12 border-t animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <h3 className="text-2xl font-bold mb-4">¿Te gustó este proyecto?</h3>
                    <p className="text-muted-foreground mb-8">
                        Estoy disponible para nuevos desafíos. Hablemos sobre tu próxima idea.
                    </p>
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href="/#contact">Contactar Ahora</Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
