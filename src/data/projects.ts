export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string;
    images?: string[];
    tags: string[];
}

// Temporary placeholder images
const PLACEHOLDER_IMAGE = '/globe.svg';

export const projects: Project[] = [
    {
        id: 'diseno-packaging',
        title: 'Diseño de Packaging',
        description: 'Rediseño integral y personalizado del juego de caja Contrarreloj, adaptando cada detalle gráfico y estructural a las necesidades específicas, visión estratégica y requerimientos funcionales del cliente.',
        longDescription: 'Rediseño personalizado del juego de caja Contrarreloj, adaptado a las necesidades específicas del cliente. La propuesta incluyó la aplicación de una paleta cromática solicitada y ajustes formales y gráficos para lograr una pieza coherente, funcional y completamente alineada con su identidad.',
        imageUrl: '/images/projects/packaging/1.jpeg',
        images: [
            '/images/projects/packaging/1.jpeg',
            '/images/projects/packaging/2.jpeg',
            '/images/projects/packaging/3.jpeg'
        ],
        tags: ['Packaging', 'Branding']
    },
    {
        id: 'sistema-patrones',
        title: 'Sistema Gráfico de Patrones',
        description: 'Desarrollo creativo de un sistema de patrones gráficos versátiles y dinámicos, diseñados meticulosamente para fortalecer y unificar la identidad visual de la marca en múltiples aplicaciones.',
        longDescription: 'Este proyecto consistió en la creación de tramas gráficas a partir de glifos iniciales, explorando su repetición, ritmo y composición como recurso visual. Posteriormente, las tramas fueron aplicadas a distintos objetos para simular su uso en estampas, permitiendo visualizar su potencial en soportes reales y evaluar su funcionamiento estético y formal.`',
        imageUrl: '/images/projects/patrones/1.jpeg',
        images: [
            '/images/projects/patrones/1.jpeg',
            '/images/projects/patrones/2.jpeg',
            '/images/projects/patrones/3.jpeg',
            '/images/projects/patrones/4.jpeg',
            '/images/projects/patrones/5.jpeg',
            '/images/projects/patrones/6.jpeg',
            '/images/projects/patrones/7.jpeg'
        ],
        tags: ['Estampas', 'Patrones']
    },
    {
        id: 'afiche-cultural',
        title: 'Afiche Cultural',
        description: 'Propuesta de comunicación visual vibrante para la feria Ideas+, capturando su esencia mediante un diseño gráfico expresivo que prioriza la claridad jerárquica y el impacto visual.',
        longDescription: 'A partir del desafío de comunicar la identidad cultural de la feria Ideas+, se desarrolló un afiche en el contexto académico, utilizando recursos gráficos que priorizan la claridad visual, la organización jerárquica y la coherencia identitaria.',
        imageUrl: '/images/projects/afiche-cultural/1.jpeg',
        images: [
            '/images/projects/afiche-cultural/1.jpeg',
            '/images/projects/afiche-cultural/2.jpeg',
            '/images/projects/afiche-cultural/3.jpeg'
        ],
        tags: ['Poster', 'Cultura']
    },
    {
        id: 'sistema-museo',
        title: 'Sistema de Comunicación para Museo',
        description: 'Propuesta integral de comunicación visual para el Museo Figari, incluyendo señalética y gráficos para una experiencia clara, accesible y enriquecedora.',
        longDescription: 'Desarrollo de un sistema integral de piezas gráficas para mejorar la accesibilidad y difusión del Museo Figari. A partir del análisis de sus públicos, se diseñaron afiches, folletos y stickers que refuerzan su identidad institucional. Se incorporaron códigos QR con audioguías y contenidos descriptivos, promoviendo una experiencia más inclusiva, clara y contemporánea.',
        imageUrl: '/images/projects/museo/1.jpeg',
        images: [
            '/images/projects/museo/1.jpeg',
            '/images/projects/museo/2.jpeg',
            '/images/projects/museo/3.jpeg',
            '/images/projects/museo/4.jpeg',
            '/images/projects/museo/5.jpeg',
            '/images/projects/museo/6.jpeg',
            '/images/projects/museo/7.jpeg'
        ],
        tags: ['Cultura', 'Identidad Visual']
    },
    {
        id: 'afiche-institucional',
        title: 'Diseño de Afiche Institucional',
        description: 'Diseño de una pieza de comunicación formal para campañas institucionales, enfocada en la claridad del mensaje, la accesibilidad universal y el impacto visual positivo en la audiencia.',
        longDescription: 'El proyecto consistió en el diseño de un afiche accesible desarrollado inicialmente en el marco académico. A partir de esta propuesta, la Comisión Honoraria de Accesibilidad de Paysandú se contactó para incorporar el afiche a su proyecto, lo que implicó su adaptación para un contexto institucional real, considerando criterios de legibilidad, contraste y adecuación al público destinatario.',
        imageUrl: '/images/projects/afiche-institucional/1.jpeg',
        images: [
            '/images/projects/afiche-institucional/1.jpeg',
            '/images/projects/afiche-institucional/2.jpeg',
            '/images/projects/afiche-institucional/3.jpeg',
            '/images/projects/afiche-institucional/4.jpeg',
            '/images/projects/afiche-institucional/5.jpeg',
            '/images/projects/afiche-institucional/6.jpeg',
            '/images/projects/afiche-institucional/7.jpeg'
        ],
        tags: ['Accessibilidad', 'Diseño Social']
    }
];
