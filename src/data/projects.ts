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
        description: 'Rediseño personalizado del juego de caja Contrarreloj, adaptado a las necesidades específicas del cliente.',
        longDescription: 'Rediseño personalizado del juego de caja Contrarreloj, adaptado a las necesidades específicas del cliente. La propuesta incluyó la aplicación de una paleta cromática solicitada y ajustes formales y gráficos para lograr una pieza coherente, funcional y completamente alineada con su identidad.',
        imageUrl: '/images/projects/packaging/1.jpeg', // Using SVG as placeholder for now since jpgs don't exist
        images: [
            '/images/projects/packaging/1.jpeg',
            '/images/projects/packaging/2.jpeg',
            '/images/projects/packaging/3.jpeg'
        ],
        tags: ['Packaging', 'Branding', 'Sostenibilidad']
    },
    {
        id: 'sistema-patrones',
        title: 'Sistema Gráfico de Patrones',
        description: 'Desarrollo de patterns versátiles para identidad de marca.',
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
        tags: ['Diseño Gráfico', 'Patrones', 'Identidad']
    },
    {
        id: 'afiche-cultural',
        title: 'Afiche Cultural',
        description: 'Propuesta de comunicación visual para la feria Ideas+.',
        longDescription: 'A partir del desafío de comunicar la identidad cultural de la feria Ideas+, se desarrolló un afiche en el contexto académico, utilizando recursos gráficos que priorizan la claridad visual, la organización jerárquica y la coherencia identitaria.',
        imageUrl: '/images/projects/afiche-cultural/1.jpeg',
        images: [
            '/images/projects/afiche-cultural/1.jpeg',
            '/images/projects/afiche-cultural/2.jpeg',
            '/images/projects/afiche-cultural/3.jpeg'
        ],
        tags: ['Editorial', 'Poster Design', 'Cultura']
    },
    {
        id: 'sistema-museo',
        title: 'Sistema de Comunicación para Museo',
        description: 'Propuesta integral de comunicación visual para un museo moderno. El proyecto incluyó el diseño de señalética wayfinding, folletos informativos y gráficos ambientales, asegurando una experiencia de usuario clara y enriquecedora para los visitantes.',
        longDescription: 'El proyecto consistió en el desarrollo de un sistema integral de piezas gráficas orientadas a mejorar la accesibilidad y difusión del Museo Figari. La propuesta partió del análisis de sus públicos y de la necesidad de generar recursos que facilitaran el acceso a la información y a la experiencia museística. Se diseñó un conjunto coherente de afiches, folletos y stickers destinados a reforzar la identidad institucional y ampliar su alcance comunicacional. Paralelamente, se incorporaron códigos QR vinculados a audioguías y contenidos descriptivos, con el objetivo de ofrecer una experiencia más inclusiva, dinámica y autónoma para los visitantes. El sistema fue concebido desde criterios de jerarquía visual, legibilidad y claridad informativa, buscando no solo fortalecer la difusión del museo, sino también promover una interacción más accesible y contemporánea con su propuesta cultural.',
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
        tags: ['Señalética', 'Museografía', 'Diseño de Información']
    },
    {
        id: 'afiche-institucional',
        title: 'Diseño de Afiche Institucional',
        description: 'Comunicación formal y efectiva para campañas institucionales.',
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
        tags: ['Institucional', 'Comunicación', 'Diseño Social']
    }
];
