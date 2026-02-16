import type { Metadata } from 'next';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Clara Burutaran - Portfolio de Diseño Gráfico',
  description: 'Portafolio profesional de Clara Burutaran, Diseñadora Gráfica Urugaya.',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white relative">
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
          <Image
            src="/images/background.png"
            alt="Fondo decorativo"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
