import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const LINKEDNLIN_URL = "https://www.linkedin.com/in/ana-clara-burutaran-tallac-7b3441221/"
const EMAIL_URL = "burutaranclara@gmail.com"
const PHONE_URL = "+59899790504"

const Footer = () => {
    return (
        <footer id="contact" className="bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Clara Burutaran</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Diseñadora Gráfica | Montevideo, Uruguay</p>
                    </div>

                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors hover:bg-secondary/10 h-14 w-14">
                            <a href={LINKEDNLIN_URL} target="_blank" rel="noopener noreferrer">
                                <span className="sr-only">LinkedIn</span>
                                <FaLinkedin className="size-7" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors hover:bg-secondary/10 h-14 w-14">
                            <a href={`mailto:${EMAIL_URL}`}>
                                <span className="sr-only">Email</span>
                                <FaEnvelope className="size-7" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="hover:text-primary transition-colors hover:bg-secondary/10 h-14 w-14">
                            <a href={`https://wa.me/${PHONE_URL}`}>
                                <span className="sr-only">Teléfono</span>
                                <RiWhatsappFill className="size-7" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
