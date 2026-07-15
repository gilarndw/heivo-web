"use client";
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function Sertifikasi() {
  const certs = [
    { title: 'SNI', desc: 'Standar Nasional Indonesia' },
    { title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu' },
    { title: 'ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan' },
    { title: 'ISO 45001:2018', desc: 'Sistem Manajemen K3' },
    { title: 'ISO 37001:2016', desc: 'Sistem Manajemen Anti Penyuapan' },
    { title: 'SMK3 & KAN', desc: 'Komite Akreditasi Nasional' }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h1 className="text-4xl font-heading font-bold text-brand-navy mb-12">Integritas Mutu yang Tak Tertandingi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map(cert => (
            <div key={cert.title} className="bg-white p-8 rounded-lg shadow-soft border border-gray-100">
              <ShieldCheck size={40} className="text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}