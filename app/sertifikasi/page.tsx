"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, CheckCircle, CheckCircle2} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const certs = [
  {
    title: "ISO 9001:2015",
    subtitle: "Sistem Manajemen Mutu",
    image: "/images/iso-9001.jpg",
    features: [
      "Audit Berkala",
      "Continuous Improvement",
      "Kepuasan Pelanggan",
    ],
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Sistem Manajemen Lingkungan",
    image: "/images/iso-14001.jpg",
    features: [
      "Manajemen Lingkungan",
      "Efisiensi Bahan Baku",
      "Regulatory Compliance",
    ],
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Sistem Manajemen K3",
    image: "/images/iso-45001.jpg",
    features: [
      "Keamanan Lingkungan Kerja",
      "Pencegahan Resiko",
      "Employee Protection & Safety",
    ],
  },
  {
    title: "TKDN",
    subtitle: "Tingkat Komponen Dalam Negeri",
    image: "/images/TKDN.jpg",
    features: [
      "Nilai Komponen Lokal Tinggi",
      "Meningkatkan Industri Lokal",
      "Keunggulan Bersaing (Kompetitif)",
    ],
  },
  {
    title: "SNI",
    subtitle: "Standar Nasional Indonesia",
    image: "/images/SNI.jpg",
    features: [
      "Perlindungan Konsumen",
      "Keamanan Produk",
      "Kualitas Terjamin",
    ],
  },
  {
    title: "SPM PLN",
    subtitle: "Standar Pengawasan Mutu PLN",
    image: "/images/SPM.jpg",
    features: [
      "Jaminan Mutu",
      "Digunakan pada instalasi PLN",
      "Memenuhi Standar PLN",
    ],
  },


];

export default function SertifikasiHero() {
  return (
    <main>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/certification-hero.jpg"
        alt="Quality Inspection"
        fill
        priority
        className="object-cover object-center" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >

          <motion.span
            variants={fadeUp}
            className="inline-block mb-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur"
          >
            QUALITY & CERTIFICATION
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            Integritas Mutu untuk
            <br />
            Setiap Produk yang Kami Hasilkan
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
          >
            Seluruh proses produksi HEIVO menerapkan sistem
            manajemen mutu yang memenuhi standar nasional
            maupun internasional untuk memastikan kualitas,
            keamanan, dan keandalan pada setiap produk.
          </motion.p>

        </motion.div>

      </div>

    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">

          <Image
            src="/images/quality-inspection.jpg"
            alt="Quality Inspection"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >

        <span className="text-brand-blue font-semibold uppercase tracking-widest text-sm">
          Quality Assurance
        </span>

        <h2 className="text-4xl font-heading font-bold text-brand-navy mt-3 mb-6">
          Mengapa Sertifikasi Penting?
        </h2>

        <p className="text-brand-dark leading-8 mb-10">
          Sertifikasi bukan sekadar dokumen, melainkan bukti bahwa setiap
          proses di PT Hiro Electric Industries dijalankan secara konsisten,
          terdokumentasi, dan diaudit sesuai standar nasional maupun
          internasional. Dengan sistem manajemen yang terintegrasi, kami
          memastikan setiap produk memiliki kualitas, keamanan, dan
          keandalan yang dapat dipercaya.
        </p>

        <div className="space-y-5">

          <div className="flex items-start gap-4">
            <CheckCircle className="text-brand-blue mt-1" />
            <div>
              <h4 className="font-semibold text-brand-navy">
                Produk Berkualitas
              </h4>
              <p className="text-gray-600">
                Diproduksi melalui prosedur yang terstandarisasi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-brand-blue mt-1" />
            <div>
              <h4 className="font-semibold text-brand-navy">
                Proses Produksi Terkontrol
              </h4>
              <p className="text-gray-600">
                Setiap tahapan dipantau untuk menjaga konsistensi mutu.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-brand-blue mt-1" />
            <div>
              <h4 className="font-semibold text-brand-navy">
                Kepatuhan terhadap Regulasi
              </h4>
              <p className="text-gray-600">
                Memenuhi persyaratan nasional maupun internasional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="text-brand-blue mt-1" />
            <div>
              <h4 className="font-semibold text-brand-navy">
                Continuous Improvement
              </h4>
              <p className="text-gray-600">
                Selalu melakukan evaluasi dan peningkatan sistem secara
                berkelanjutan.
              </p>
            </div>
          </div>

        </div>

      </motion.div>

    </div>

  </div>
    </section>


    <section className="py-24 bg-brand-light">

      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
>
  {certs.map((cert) => (
    <motion.div
      key={cert.title}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-200"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-heading font-bold text-brand-navy mb-2">
          {cert.title}
        </h3>

        <p className="text-brand-blue font-medium mb-6">
          {cert.subtitle}
        </p>

        <div className="space-y-3 mb-8">
          {cert.features.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-brand-blue flex-shrink-0"
              />

              <span className="text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        
      </div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
    <section className="py-24 bg-white">
  <div className="container mx-auto px-6 max-w-7xl">

    {/* Section Header */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="text-center mb-20"
    >
      <span className="text-brand-blue font-semibold uppercase tracking-[0.2em] text-sm">
        QUALITY COMMITMENT
      </span>

      <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mt-4 mb-6">
        Komitmen Kami terhadap Kualitas
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-brand-dark leading-relaxed">
        Di PT Hiro Electric Industries, kualitas bukan hanya hasil akhir,
        melainkan bagian dari setiap proses produksi. Mulai dari pemilihan
        material hingga inspeksi akhir, kami menerapkan sistem pengendalian
        mutu yang memastikan setiap produk memenuhi standar nasional maupun
        internasional.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">

          <Image
            src="/images/material.jpg"
            alt="Quality Control"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-5">

            <p className="text-3xl font-bold text-brand-blue">
              100%
            </p>

            <p className="text-sm text-brand-dark">
              Quality Inspection
            </p>

          </div>

        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >

        {/* Card 1 */}
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-brand-blue hover:shadow-lg transition-all duration-300">

          <div className="flex gap-4">

            <CheckCircle2
              size={28}
              className="text-brand-blue mt-1 flex-shrink-0"
            />

            <div>

              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
                Material Berkualitas
              </h3>

              <p className="text-gray-600 leading-7">
                Seluruh material dipilih berdasarkan spesifikasi teknis
                yang ketat untuk menjamin daya tahan dan performa produk.
              </p>

            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-brand-blue hover:shadow-lg transition-all duration-300">

          <div className="flex gap-4">

            <CheckCircle2
              size={28}
              className="text-brand-blue mt-1 flex-shrink-0"
            />

            <div>

              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
                Proses Produksi Terkontrol
              </h3>

              <p className="text-gray-600 leading-7">
                Setiap tahapan produksi diawasi menggunakan prosedur kerja
                yang terdokumentasi untuk menjaga konsistensi mutu.
              </p>

            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-brand-blue hover:shadow-lg transition-all duration-300">

          <div className="flex gap-4">

            <CheckCircle2
              size={28}
              className="text-brand-blue mt-1 flex-shrink-0"
            />

            <div>

              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
                Pemeriksaan Menyeluruh
              </h3>

              <p className="text-gray-600 leading-7">
                Produk melalui proses inspeksi dan pengujian sebelum
                dipasarkan untuk memastikan keamanan dan keandalannya.
              </p>

            </div>

          </div>

        </div>

        {/* Card 4 */}
        <div className="group rounded-2xl border border-gray-200 p-6 hover:border-brand-blue hover:shadow-lg transition-all duration-300">

          <div className="flex gap-4">

            <CheckCircle2
              size={28}
              className="text-brand-blue mt-1 flex-shrink-0"
            />

            <div>

              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
                Continuous Improvement
              </h3>

              <p className="text-gray-600 leading-7">
                Evaluasi dan peningkatan sistem dilakukan secara berkala
                agar proses produksi selalu mengikuti perkembangan teknologi
                dan kebutuhan pelanggan.
              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>

    
  </main>

    

    
  );
}