import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Tentang Kami | PT Hiro Electric Industries', description: 'Mengenal lebih dekat PT Hiro Electric Industries.' };
export default function AboutLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }