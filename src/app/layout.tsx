import type { Metadata } from 'next';
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
  title: 'Clara Burutaran',
  description: 'Portafolio profesional de Clara Burutaran, Diseñadora Gráfica Urugaya.',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth scroll-pt-20`}>
      <body className="font-sans antialiased min-h-screen flex flex-col text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-white relative bg-background">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
