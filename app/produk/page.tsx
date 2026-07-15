"use client";
import { motion, Variants } from 'framer-motion';
import Button from '@/components/ui/button';
import { Zap, HardHat, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

export default function KatalogProduk() {
  return (
    <>
      <section className="bg-brand-navy pt-24 pb-16 border-b-4 border-brand-blue text-center">
        <motion.div initial='hidden' animate='visible' variants={staggerContainer}>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Katalog Produk HEIVO</motion.h1>
          <motion.p variants={fadeUp} className='text-lg text-gray-300 max-w-2xl mx-auto'>Solusi lengkap produk elektrik dan infrastruktur konstruksi untuk mendukung pembangunan Indonesia.</motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={fadeUp} className="mb-12 flex items-center gap-4">
            <Zap size={28} className="text-brand-blue" />
            <h2 className="text-3xl font-heading font-bold text-brand-navy">Peralatan Elektrik</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true}} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className=" group border border-gray-100 p-8 rounded-lg shadow-sm">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image src="/images/Mcb-2.jpg" alt="MCB HEIVO" fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3 pt-2">MCB HEIVO</h3>
              <p className="mb-6">Mekanisme pembersih otomatis (Self-Cleaning) dan kontak tembaga lapis perak 1.75 mm.</p>
              <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
              <Link href="/kontak"><Button variant="outline" className="w-full">Minta Penawaran</Button></Link>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="group border border-gray-100 p-8 rounded-lg shadow-sm">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image src="/images/kwh-2.jpg" alt="KWH HEIVO" fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3 pt-2">kWh Meter Prabayar</h3>
              <p className="mb-6">Teknologi enkripsi 20 digit berstandar STS untuk keamanan maksimal dan fitur anti-magnet.</p>
              <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
              <Link href="/kontak"><Button variant="outline" className="w-full">Minta Penawaran</Button></Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12 flex items-center gap-4">
            <HardHat size={28} className="text-brand-blue" />
            <h2 className="text-3xl font-heading font-bold text-brand-navy">Infrastruktur Konstruksi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-brand-navy text-xl mb-2">Kabel Tray & Ladder</h4>
              <p className="text-sm">Material SPHC, Aluminium, Stainless Steel. Finishing Hot dip galvanis.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-brand-navy text-xl mb-2">Tiang PJU & Smart Pole</h4>
              <p className="text-sm">Desain Octagonal presisi tinggi untuk penerangan jalan umum dan CCTV.</p>
            </div>
            <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-brand-navy text-xl mb-2">Panel Listrik (PHB-TR)</h4>
              <p className="text-sm">Panel hubung bagi tegangan rendah dan cubical enclosure.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}