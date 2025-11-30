import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      destination,
      startDate,
      endDate,
      travelers,
      preferences,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // app password[web:155]
      },
    });

    await transporter.sendMail({
      from: `"Aleph Website" <${process.env.GMAIL_USER}>`,
      to: "thealephcampeur@gmail.com",
      subject: "New Booking Request from Website",
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Destination: ${destination}
Start Date: ${startDate}
End Date: ${endDate}
Travelers: ${travelers}

Preferences / Notes:
${preferences || "-"}
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: "Email failed" }), {
      status: 500,
    });
  }
}
