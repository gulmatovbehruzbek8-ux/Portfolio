import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { personal } from '@/lib/constants/personal';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "API key is not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: personal.email,
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
