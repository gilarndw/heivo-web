import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Katalog Produk | PT Hiro Electric Industries', description: 'Spesifikasi presisi untuk jaminan keamanan fasilitas Anda.' };
export default function ProductsLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }