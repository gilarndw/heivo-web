"use client";
import { MapPin, Calendar } from 'lucide-react';

const projectsData = [
  { id: 1, title: 'Instalasi Tiang PJU Tol Banten', category: 'Konstruksi', location: 'Banten', date: 'Okt 2025' },
  { id: 2, title: 'Pemasangan Panel Listrik Gedung Jakarta', category: 'Elektrik', location: 'Jakarta Barat', date: 'Jan 2026' }
];

export default function ProyekPortofolio() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-heading font-bold text-brand-navy mb-12 text-center">Portofolio Proyek Terkini</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <article key={project.id} className="bg-brand-light rounded-lg shadow-soft p-8 border border-gray-100">
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center"><MapPin size={14} className="mr-1 text-brand-blue" /> {project.location}</span>
                <span className="flex items-center"><Calendar size={14} className="mr-1 text-brand-blue" /> {project.date}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-navy mb-3">{project.title}</h3>
              <span className="bg-brand-blue text-white px-2 py-1 text-xs rounded">{project.category}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}