import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaPaintBrush, FaVectorSquare, FaPencilRuler, FaUsers, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section id="proyectos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proyectos Destacados
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Una selección de trabajos recientes que combinan creatividad y propósito.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="px-8 rounded-full">
              <Link href="/proyectos">
                Ver Todos los Proyectos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills / About Section (Expanded) */}
      <section id="competencias" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Software & Habilidades</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              Herramientas y Competencias
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              Combino habilidades técnicas avanzadas con una mentalidad estratégica y colaborativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1: Adobe Creative Cloud */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary/10 text-secondary">
                  <FaPaintBrush className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Adobe Photoshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Edición fotográfica avanzada, composición digital y retoque profesional.
                </p>
              </CardContent>
            </Card>

            {/* Skill 2: Illustrator */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary/10 text-secondary">
                  <FaVectorSquare className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Adobe Illustrator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ilustración vectorial, diseño de logotipos, iconos y branding escalable.
                </p>
              </CardContent>
            </Card>

            {/* Skill 3: InDesign */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary/10 text-secondary">
                  <FaPencilRuler className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Adobe InDesign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Maquetación editorial, diseño de revistas, folletos y presentaciones corporativas.
                </p>
              </CardContent>
            </Card>

            {/* Skill 4: Proactividad */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                  <FaLightbulb className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Proactividad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Iniciativa para proponer soluciones innovadoras y anticipar necesidades del proyecto.
                </p>
              </CardContent>
            </Card>

            {/* Skill 5: Trabajo en Equipo */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                  <FaUsers className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Liderazgo y Equipo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Capacidad para liderar grupos, colaborar eficazmente y fomentar un buen clima laboral.
                </p>
              </CardContent>
            </Card>

            {/* Skill 6: Web Design Basics */}
            <Card className="hover:shadow-lg transition-shadow border-muted py-4">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                  <FaLaptopCode className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Diseño Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Nociones de diseño UI/UX y creación de contenido visual para redes sociales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">¿Te interesa colaborar?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Estoy siempre abierta a nuevas oportunidades y proyectos desafiantes. Conectemos.
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-full px-8 text-primary font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <a href="#contact">
              Contactar Ahora
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
