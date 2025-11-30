import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

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

    if (!fullName || !email || !destination) {
      return withCors(
        NextResponse.json(
          { ok: false, error: "Missing required fields" },
          { status: 400 }
        )
      );
    }

    const { error } = await resend.emails.send({
      from: "Aleph Website <no-reply@aleph.co.in>",
      to: "thealephcampeur@gmail.com",
      subject: "New Booking Request from Website",
      text: `
New booking request from the website:

Full Name: ${fullName}
Email: ${email}
Phone: ${phone || "-"}

Destination: ${destination}
Start Date: ${startDate?.day || "-"}-${startDate?.month || "-"}-${startDate?.year || "-"}
End Date: ${endDate?.day || "-"}-${endDate?.month || "-"}-${endDate?.year || "-"}
Number of Travelers: ${travelers || "-"}

Additional Preferences:
${preferences || "-"}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return withCors(
        NextResponse.json(
          { ok: false, error: "Email failed to send" },
          { status: 500 }
        )
      );
    }

    return withCors(NextResponse.json({ ok: true }, { status: 200 }));
  } catch (err: any) {
    console.error("Book-trip API error:", err);
    return withCors(
      NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
    );
  }
}

function withCors(res: NextResponse) {
  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
