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
      from: 'Heivo RFQ <rfq@hiro-electric.id>',
      to: 'support@hiro-electric.id',
      replyTo: email,
      subject: `RFQ Baru dari ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;">
          <h2 style="color:#0056D2;">
            Permintaan Penawaran Baru
          </h2>

          <table cellpadding="8" cellspacing="0">
            <tr>
              <td><strong>Nama</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Pesan</strong></td>
              <td>${message}</td>
            </tr>
          </table>

          <hr />

          <p>
            Email ini dikirim otomatis dari website
            <strong>PT Hiro Electric Industries</strong>.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Sukses' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan sistem' }, { status: 500 });
  }
}