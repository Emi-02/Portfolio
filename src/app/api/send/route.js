import { Resend } from 'resend';


export async function POST(request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tutti i campi sono richiesti.' }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Modulo Contatti <onboarding@resend.dev>', 
      to: ['emiliano.avvisato@gmail.com'],
      subject: `Nuovo messaggio da ${name}`,
      replyTo: email, 
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}