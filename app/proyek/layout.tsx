import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Proyek & Portofolio | PT Hiro Electric Industries', description: 'Portofolio' };
export default function ProyekLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }