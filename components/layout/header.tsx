"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Produk', href: '/produk' },
  { name: 'Standar Mutu', href: '/sertifikasi' },
  // { name: 'Proyek', href: '/proyek' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-3' : 'bg-brand-navy py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={isScrolled ? "/images/logo-HEIVO.png" : "/images/logo-HEIVO White.svg"}
             alt="PT Hiro Electric Industries"
             width={280}
             height={70}
             priority
             className="h-16 w-auto"
           />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`text-sm font-semibold transition-colors hover:text-brand-blue ${pathname === item.href ? 'text-brand-blue' : isScrolled ? 'text-brand-dark' : 'text-gray-200'}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/kontak" className="hidden md:block">
            <Button variant={isScrolled ? 'primary' : 'outline'} className={!isScrolled ? 'text-white border-white hover:bg-white/10' : ''}>
              Minta Penawaran
            </Button>
          </Link>
          <button className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-brand-navy' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 overflow-hidden">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-semibold py-2 border-b border-gray-50 ${pathname === item.href ? 'text-brand-blue' : 'text-brand-dark'}`}>
                  {item.name}
                </Link>
              ))}
              <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="pt-2 pb-4">
                <Button variant="primary" className="w-full">Minta Penawaran (RFQ)</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}