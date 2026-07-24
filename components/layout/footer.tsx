import Link from 'next/link';
import { Zap, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy pt-20 pb-10 border-t-4 border-brand-blue">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <Link href="/" className="mb-6 inline-block">
  <Image
    src="/images/logo-HEIVO White.svg"
    alt="PT Hiro Electric Industries"
    width={280}
    height={80}
    className="h-20 w-auto"
    priority
  />
</Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              PT Hiro Electric Industries. Manufaktur peralatan elektrik dan infrastruktur konstruksi terdepan di Indonesia. Komitmen kami adalah kualitas, keamanan, dan efisiensi.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Navigasi Cepat</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Katalog Produk', 'Sertifikasi Mutu'].map((item, index) => {
                const links = ['/', '/tentang-kami', '/produk', '/sertifikasi', '/proyek'];
                return (
                  <li key={item}>
                    <Link href={links[index]} className="text-gray-400 hover:text-brand-blue text-sm flex items-center transition-colors">
                      <ArrowRight size={14} className="mr-2" /> {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={18} className="mr-3 text-brand-blue flex-shrink-0 mt-0.5" />
                <span><strong className="text-gray-200 block mb-1">Pabrik (Factory):</strong>Jl. Raya Cikande Rangkasbitung KM 03, Gabus, Kopo, Kabupaten Serang, Banten, Indonesia 42124</span>
              </li>
               {/*<li className="flex items-start text-gray-400 text-sm">
                <MapPin size={18} className="mr-3 text-brand-blue flex-shrink-0 mt-0.5" />
                <span><strong className="text-gray-200 block mb-1">Kantor (Rep. Office):</strong>Meruya, Jakarta Barat</span>
              </li>*/}
              <li className="flex items-center text-gray-400 text-sm hover:text-white transition-colors">
                <Phone size={18} className="mr-3 text-brand-blue flex-shrink-0" /><a href="tel:02138777094">(021) 38 777 094</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm hover:text-white transition-colors">
                <Mail size={18} className="mr-3 text-brand-blue flex-shrink-0" /><a href="mailto:support@hiro-electric.id">support@hiro-electric.id</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Standar Mutu</h4>
            <p className="text-gray-400 text-sm mb-4">Telah tersertifikasi resmi oleh:</p>
            <div className="flex flex-wrap gap-3">
              {['SNI', 'TKDN', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'SMK3'].map((badge) => (
                <span key={badge} className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded border border-white/10">{badge}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">&copy; {currentYear} PT Hiro Electric Industries. All Rights Reserved.</p>
          {/* <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}