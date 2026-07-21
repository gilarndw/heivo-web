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
          <motion.p variants={fadeUp} className='text-lg text-gray-300 max-w-2xl mx-auto'>Solusi lengkap produk elektrik untuk mendukung instalasi listrik bangunan anda.</motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={fadeUp} className="mb-12 flex items-center gap-4">
            <Zap size={28} className="text-brand-blue" />
            <h2 className="text-3xl font-heading font-bold text-brand-navy">Peralatan Elektrik</h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true}} className="grid lg:grid-cols-2 gap-10 items-stretch">
            
            <motion.div 
            variants={fadeUp}
            whileHover={{y:-8}}
            transition={{duration: 0.25}} 
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <Image src="/images/Mcb-2.jpg" alt="MCB HEIVO" fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue mb-4">
                Miniature Circuit Breaker
                </span>

                <h3 className="text-3xl font-bold text-brand-navy mb-4">MCB HEIVO</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  SPLN
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  IEC
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  TKDN
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  SNI
                  </span>
                </div>
                <p className="text-brand-dark leading-relaxed mb-8">
                  MCB HEIVO dirancang untuk memberikan perlindungan sirkuit yang
                  aman, stabil, dan andal dengan teknologi kontak berkualitas tinggi
                  untuk berbagai aplikasi industri maupun komersial.
                </p>

                <div className="border-t border-gray-200 mb-8"></div>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      Mekanisme Self Cleaning
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      Ketebalan Kontak 1.75mm
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      Low Power Loss
                    </span>
                  </div>

                </div>

                <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
              <Link href="/kontak"><Button variant="outline" className="w-full">Minta Penawaran</Button></Link>
              </motion.div>

              </div>
              
            </motion.div>

            <motion.div 
            variants={fadeUp}
            whileHover={{y:-8}}
            transition={{duration: 0.25}} 
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden bg-gray-50">
                <Image src="/images/kwh-2.jpg" alt="kwh meter" fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue mb-4">
                Smart KWH Meter
                </span>

                <h3 className="text-3xl font-bold text-brand-navy mb-4">KWH Meter Prabayar HEIVO</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  SPLN
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  IEC
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  TKDN
                  </span>

                  <span className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-brand-dark">
                  SNI
                  </span>
                </div>
                <p className="text-brand-dark leading-relaxed mb-8">
                  kWh Meter HEIVO menghadirkan akurasi pengukuran tinggi,
                  keamanan data melalui teknologi enkripsi STS, serta fitur
                  anti-magnet untuk mendukung sistem distribusi energi modern.
                </p>

                <div className="border-t border-gray-200 mb-8"></div>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      STS 20 Digit Encryption
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      Anti-Magnet Protection
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Check 
                      size={18}
                      className='text-brand-blue flex-shrink-0'
                    />
                    <span className="text-brand-dark">
                      High Measurement Accuracy
                    </span>
                  </div>

                </div>

                <motion.div whileHover={{scale: 1.03}} whileTap={{scale: 0.97}}>
              <Link href="/kontak"><Button variant="outline" className="w-full">Minta Penawaran</Button></Link>
              </motion.div>

              </div>
              
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-brand-navy via-[#23395D] to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full border border-white"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full border border-white"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white mb-6">
            Konsultasi Produk
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Belum Menemukan Produk dengan Spesifikasi yang Anda Cari?
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed mb-10">
            Tim HEIVO siap membantu Anda memilih solusi elektrik yang paling sesuai
            dengan kebutuhan proyek, spesifikasi teknis, maupun Customize Request.
            Konsultasikan kebutuhan Anda dan dapatkan penawaran terbaik dari kami.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontak">
            <Button variant="primary">
              Konsultasi Sekarang
            </Button>
            </Link>
          </div>

          </motion.div>
        </div>


      </section>
      
      {/* <section className="py-20 bg-brand-light">
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
      </section> */}
    </>
  );
}