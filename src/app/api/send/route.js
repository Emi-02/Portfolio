import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tutti i campi sono richiesti.' }), { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Chiave API non configurata su Netlify.' }), { status: 500 });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'Modulo Contatti <onboarding@resend.dev>', 
      to: ['emiliano.avvisato@gmail.com'],
      subject: `Nuovo messaggio da ${name}`,
      reply_to: email,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    });

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}