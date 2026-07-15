"use client";
import { useState } from 'react';
import Button from '@/components/ui/button';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function Kontak() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-8">Informasi Kontak</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start"><MapPin className="text-brand-blue mr-4" /><div><h4 className="font-bold text-brand-navy">Factory</h4><p>Cikande, Banten</p></div></div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start"><Phone className="text-brand-blue mr-4" /><span className="font-bold text-brand-navy">(021) 38 777 094</span></div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start"><Mail className="text-brand-blue mr-4" /><span className="font-bold text-brand-navy">support@hiro-electric.id</span></div>
        </div>
        
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-soft">
          <h3 className="text-2xl font-bold text-brand-navy mb-6">Kirim Permintaan (RFQ)</h3>
          {status === 'success' ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Pesan Terkirim!</h4>
              <Button variant="outline" className="mt-4" onClick={() => setStatus('idle')}>Kirim Lagi</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input id="name" required placeholder="Nama / Perusahaan" className="w-full p-4 border border-gray-300 rounded focus:border-brand-blue" />
              <input id="email" type="email" required placeholder="Email" className="w-full p-4 border border-gray-300 rounded focus:border-brand-blue" />
              <textarea id="message" required placeholder="Spesifikasi & Volume Kebutuhan..." rows={5} className="w-full p-4 border border-gray-300 rounded focus:border-brand-blue" />
              <Button type="submit" className="w-full">{status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}