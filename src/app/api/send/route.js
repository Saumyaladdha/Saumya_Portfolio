import { NextResponse } from "next/server";
import { Resend } from "resend";

function getEmailClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const resend = getEmailClient();
    const fromEmail = process.env.FROM_EMAIL;

    if (!resend || !fromEmail) {
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set RESEND_API_KEY and FROM_EMAIL in your environment.",
        },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
