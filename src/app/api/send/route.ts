import { EmailTemplate } from '@/components/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const emailReceiver = process.env.RECEIVER_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  if (!emailReceiver) {
    return Response.json(
      { error: 'Receiver email is not defined' },
      { status: 500 },
    );
  }

  const body = await request.json();
  const { name, email, phoneNumber, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Site <contact-form@resend.dev>',
      to: [emailReceiver],
      subject: 'Hello world',
      react: EmailTemplate({ name, email, phoneNumber, message }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
