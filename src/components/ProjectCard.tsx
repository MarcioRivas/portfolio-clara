import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects'; // Import the type

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 h-full flex flex-col p-0 pb-6 gap-6">
            <div className="aspect-video w-full bg-muted relative overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={`Imagen de ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags?.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/proyectos/${project.id}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
                <CardDescription className="line-clamp-3 text-sm">
                    {project.description}
                </CardDescription>
            </CardContent>

            <CardFooter>
                <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:text-primary/80">
                    Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
