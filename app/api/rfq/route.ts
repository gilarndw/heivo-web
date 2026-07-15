import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    // 1. Simpan ke Database
    const newRfq = await prisma.rfqSubmission.create({
      data: { name, email, message },
    });

    // 2. Kirim Notifikasi ke Tim Sales HEIVO
    await resend.emails.send({
      from: 'Heivo Support <onboarding@resend.dev>',
      to: 'support@hiro-electric.id',
      subject: `RFQ Baru dari ${name}`,
      html: `
        <h2>Permintaan Penawaran (RFQ)</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Sukses' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan sistem' }, { status: 500 });
  }
}