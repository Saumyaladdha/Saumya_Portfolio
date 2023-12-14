import { NextResponse } from "next/server";
import { Resend } from "resend";

// Create a Resend instance with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Get the "from" email address from environment variables
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  // Extract email, subject, and message from the request body
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // Send an email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // Send to both the sender and the configured "from" email
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

    // Return a JSON response with the data from Resend
    return NextResponse.json(data);
  } catch (error) {
    // If there's an error, return a JSON response with the error
    return NextResponse.json({ error });
  }
}
