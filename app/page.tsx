"use client";
import { motion, Variants } from 'framer-motion';
import Button from '@/components/ui/button';
import { ShieldCheck, Zap, Flag, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut"}}
        className="absolute inset-0">
        <Image
    src="/images/slider_home_1.jpg"
    alt="HEIVO Hero Background"
    fill
    priority
    className="object-cover object-[70%_center] md:object-center"
  />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40 z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Solusi Infrastruktur Kelistrikan Terbaik & Andal.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Menghadirkan produk elektrik bermutu tinggi dengan komitmen penuh pada penggunaan komponen lokal (TKDN) untuk mewujudkan kemandirian industri nasional.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-stretch sm:flex-row sm:items-center gap-4">
              <Link href="/kontak" className="w-full sm:w-auto"><Button variant="primary" className="w-full sm:w-auto">Minta Penawaran (RFQ)</Button></Link>
              <Link href="/produk" className="w-full sm:w-auto"><Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">Jelajahi Produk</Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-brand-light border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">Diproduksi & Diakui Sesuai Standar Nasional & Internasional</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale font-heading font-bold text-xl">
            <span>SNI</span><span>ISO 9001</span><span>ISO 14001</span><span>ISO 45001</span><span>TKDN</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Produk Elektrik Unggulan HEIVO</h2>
            <p className="text-brand-dark max-w-2xl mx-auto">
                Solusi perlindungan dan pengukuran daya yang dirancang untuk memenuhi
                kebutuhan industri, utilitas, komersial, dan infrastruktur dengan
                kualitas manufaktur yang telah dipercaya berbagai proyek di Indonesia.
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
              
              <div className="grid lg:grid-cols-2">
                <div className="relative h-72 lg:h-full">
                  <Image
                  src="/images/electrical-prod.jpg"
                  fill
                  alt="Peralatan Elektrik"
                  className='object-cover transition-transform duration-700 group-hover:scale-105'/>
                </div>
            

                <div className="p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">Produk Utama</span>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-brand-navy mb-2">Peralatan Elektrik</h3>
                  <p className="text-brand-blue font-semibold mb-6">MCB • kWh Meter</p>
                  <p className="text-brand-dark leading-relaxed mb-8">
                    HEIVO menghadirkan solusi perlindungan dan pengukuran daya yang dirancang untuk 
                    memberikan keamanan maksimal, efisiensi energi, dan keandalan jangka panjang. 
                    Setiap produk diproduksi dengan standar kualitas tinggi untuk mendukung berbagai kebutuhan instalasi kelistrikan modern.
                  </p>

                  {/* <div className="grid gap-4 mb-10">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-brand-dark">
                            Teknologi <strong>Pemadam Busur Api</strong> yang modern.
                        </span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-brand-dark">
                            Kontak tembaga dengan ketebalan <strong>1.75 mm</strong> untuk keamanan maksimal.
                        </span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-brand-dark">
                            Mekanisme <strong>Self-Cleaning</strong> untuk umur kontak lebih panjang.
                        </span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-brand-dark">
                            Teknologi <strong>Low Power Loss</strong> untuk efisiensi energi.
                        </span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-blue mt-1 flex-shrink-0" size={20} />
                        <span className="text-brand-dark">
                            Terminal Kabel <strong>Anti Longgar dan Aman</strong> mencegah percikan api.
                        </span>
                    </div>

                  </div> */}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link href="/produk">
                    <Button variant="primary">
                      Jelajahi Produk
                    </Button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-10">
                    <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-navy">
                        SNI
                    </span>
                    <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-navy">
                        TKDN
                    </span>
                    <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-brand-navy">
                        SPLN
                    </span>
                  </div>


                </div>
              </div>
              {/* <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image src="/images/electrical-prod.jpg" alt="ELEC HEIVO" fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-brand-navy mb-3 pt-2">Peralatan Elektrik</h3>
              <p className="text-brand-dark mb-6">MCB dan kWh Meter dengan tingkat akurasi tinggi, perlindungan keamanan ekstra, dan sistem manajemen daya cerdas.</p>
              <Link href="/produk" className="text-brand-blue font-semibold group-hover:underline">Lihat Produk Elektrik &rarr;</Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="group bg-white rounded-lg shadow-soft border border-gray-100 p-8">
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image src="/images/infra-prod.jpg" alt="INFRA HEIVO" fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-brand-navy mb-3 pt-2">Infrastruktur Konstruksi</h3>
              <p className="text-brand-dark mb-6">Kabel Tray, Tiang PJU, Smart Pole, hingga Panel Listrik yang kokoh dan diproduksi sesuai standar proyek berskala besar.</p>
              <Link href="/produk" className="text-brand-blue font-semibold group-hover:underline">Lihat Produk Konstruksi &rarr;</Link> */}

            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-navy">Mengapa Memilih PT Hiro Electric Industries?</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue mb-6"><ShieldCheck size={32} /></div>
              <h4 className="text-xl font-heading font-semibold text-brand-navy mb-3">Keamanan Ekstra</h4>
              <p className="text-brand-dark">Kontak Tembaga Lapis Perak 1.75mm. Desain kontak tertebal di kelasnya untuk performa maksimal tanpa risiko overheat.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue mb-6"><Zap size={32} /></div>
              <h4 className="text-xl font-heading font-semibold text-brand-navy mb-3">Efisiensi Tinggi</h4>
              <p className="text-brand-dark">Low Power Loss. Tahanan dalam yang sangat rendah meminimalkan pembuangan energi dalam bentuk panas, menghemat biaya.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue mb-6"><Flag size={32} /></div>
              <h4 className="text-xl font-heading font-semibold text-brand-navy mb-3">Kemandirian Industri</h4>
              <p className="text-brand-dark">Komitmen TKDN (P3DN). Kami memastikan setiap proyek Anda memenuhi persyaratan kandungan lokal pemerintah.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}