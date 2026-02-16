"use client";

import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: "video" | "square" | "portrait";
}

export default function ZoomableImage({ src, alt, className, aspectRatio = "video" }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset'; // Restore scrolling
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset'; // Ensure cleanup
        };
    }, [isOpen, handleKeyDown]);

    return (
        <>
            <div
                className={cn("cursor-pointer relative group w-full h-full", className)}
                onClick={openModal}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 drop-shadow-md" />
                </div>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-lg flex items-center justify-center animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 z-[10000] rounded-full p-2 h-12 w-12"
                        onClick={closeModal}
                    >
                        <X className="h-8 w-8" />
                        <span className="sr-only">Cerrar</span>
                    </Button>

                    <div
                        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                            quality={100}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
