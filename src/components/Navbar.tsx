'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // If not on home page, always show navbar
      if (pathname !== '/') {
        setIsVisible(true);
        return;
      }

      // Show navbar when scrolled down more than 50px
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 transform bg-[#ffd5bcbf]",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto justify-between">
        <div></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/30 focus:bg-white/30", isActive('/') && "bg-white/30 font-semibold")}>
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/proyectos" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/30 focus:bg-white/30", isActive('/proyectos') && "bg-white/30 font-semibold")}>
                    Proyectos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/30 focus:bg-white/30", isActive('/contacto') && "bg-white/30 font-semibold")}>
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-primary/20 bg-background/95 backdrop-blur-xl p-0">
              <div className="mt-12 flex flex-col h-[calc(100vh-120px)] justify-between p-6">
                <nav className="flex flex-col gap-6">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-4 text-xl font-medium p-3 rounded-lg transition-all duration-300",
                      isActive('/') ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/proyectos"
                    className={cn(
                      "flex items-center gap-4 text-xl font-medium p-3 rounded-lg transition-all duration-300",
                      isActive('/proyectos') ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Proyectos
                  </Link>
                  <Link
                    href="/contacto"
                    className={cn(
                      "flex items-center gap-4 text-xl font-medium p-3 rounded-lg transition-all duration-300",
                      isActive('/contacto') ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </Link>
                </nav>

                <div className="flex flex-col gap-4 pt-8 border-t border-primary/10">
                  {/* Removed the extra contact button to avoid duplication, as Contacto is now in the main menu */}
                  <p className="text-center text-sm text-muted-foreground pt-4">
                    © {new Date().getFullYear()} Clara Burutaran
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
