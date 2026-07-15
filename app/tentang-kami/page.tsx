"use client";
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import { Target, Compass, CheckCircle2, Factory, ShieldCheck, Building2, Package } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import StatisticCard from '@/components/ui/statistic-card';
import GalleryCard from '@/components/ui/gallery-card';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function TentangKami() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center bg-brand-navy overflow-hidden">
        <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
        duration: 8,
        ease: 
        "easeOut"}}
        className="absolute inset-0">
        <Image src="/images/factory-hero.jpg" alt="HEIVO Factory" fill priority className="object-cover"/>
        </motion.div>
        <div className="absolute inset-0 bg-black/40"/>
        <div className="absolute inset-0 bg-gradient-to-r
        from-brand-navy/90
        via-brand-navy/70
        to-brand-navy/40"/>
        
        <div className="container mx-auto px-6 relative z-20 max-w-4xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Menghadirkan Teknologi Listrik Terbaik untuk Indonesia.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-lg md:text-xl text-gray-200">
            Lebih dari sekedar manufaktur, kami adalah mitra strategis Anda dalam membangun infrastruktur energi yang aman, andal, dan inovatif.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative mb-16 h-[300px] overflow-hidden rounded-3xl md:h-[450px] shadow-2xl">
            <Image 
            src="/images/factory-story.jpg"
            alt="PT Hiro Electric Industries Factory"
            fill
            className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-heading font-bold text-brand-navy mb-6">Adaptif, Inovatif, dan Teruji.</motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg text-brand-dark max-w-none">
            <p>PT Hiro Electric Industries berdiri di atas lahan seluas 2.5 ha, secara fleksibel beradaptasi terhadap perubahan yang berkala dan permintaan teknologi.</p>
            <p>Sejalan dengan program pemerintah mendorong P3DN dan memperbesar TKDN, kami berkomitmen mewujudkan kemandirian sektor industri.</p>
          </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20">
  <div className="container mx-auto max-w-6xl px-6">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
        HEIVO dalam Angka
      </h2>

      <p className="mt-4 text-brand-dark max-w-2xl mx-auto">
        Kami terus berkembang untuk memberikan solusi kelistrikan yang
        berkualitas tinggi bagi industri Indonesia.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

      {/* Card 1 */}
      <StatisticCard
        icon={<Factory size={36} />}
        number={2.5}
        suffix=" Ha"
        title="Luas Pabrik"
      />

      {/* Card 2 */}
      <StatisticCard
        icon={<ShieldCheck size={36} />}
        number={90}
        suffix="%"
        title="Komitmen TKDN"
      />

      {/* Card 3 */}
      <StatisticCard
        icon={<Building2 size={36} />}
        number={20}
        suffix="+"
        title="Tahun Pengalaman"
      />

      {/* Card 4 */}
      <StatisticCard
        icon={<Package size={36} />}
        number={100}
        suffix="+"
        title="Ton Kapasitas Produksi"
      />

    </div>
  </div>
</section>




      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy" />
        <div
    className="absolute inset-0 opacity-30 bg-repeat"
    style={{
      backgroundImage: "url('/images/pattern.svg')",
      backgroundSize: "500px",
    }}/>
        <div className='relative z-10'>
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-3xl shadow-soft border border-gray-100">
            <Compass size={48} className="text-brand-blue mb-4" />
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Visi Kami</h3>
            <p>Menjadi Market Leader untuk peralatan elektrik dengan teknologi terbaik di Indonesia.</p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-soft border border-gray-100">
            <Target size={48} className="text-brand-blue mb-4" />
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Misi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle2 className="text-brand-blue mr-2 flex-shrink-0" /> Berorientasi pada kepuasan pelanggan.</li>
              <li className="flex items-start"><CheckCircle2 className="text-brand-blue mr-2 flex-shrink-0" /> Memberikan jaminan atas keamanan dan keandalan.</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      <section className="py-24 bg-white">
  <div className="container mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <p className="mb-2 font-semibold text-brand-blue">
        OUR FACILITY
      </p>

      <h2 className="text-4xl font-heading font-bold text-brand-navy">
        Inside HEIVO Factory
      </h2>

      <p className="mt-5 text-lg text-brand-dark">
        Melihat lebih dekat fasilitas produksi dan proses manufaktur kami
        yang mendukung kualitas setiap produk HEIVO.
      </p>
    </motion.div>

    <div className="grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-3">

  <GalleryCard
    image="/images/factory.jpeg"
    title="Factory"
    className="md:col-span-2 md:row-span-2"
  />

  <GalleryCard
    image="/images/production.jpeg"
    title="Production Line"
  />

  <GalleryCard
    image="/images/warehouse.jpg"
    title="Warehouse"
  />

  <GalleryCard
    image="/images/qc.jpeg"
    title="Quality Control"
    className="md:col-span-3"
  />

</div>

    </div>




    </section>




    </>
  );
}