import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    if (!body.name || !body.phone || !body.location) {
      return NextResponse.json(
        { error: 'Name, phone, and project location are required.' },
        { status: 400 }
      );
    }

    // In a production setup, dispatch email to Resend/Sendgrid & save to DB
    console.log('[NEW LEAD ENQUIRY RECEIVED]', {
      name: body.name,
      phone: body.phone,
      service: body.service,
      location: body.location,
      time: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Enquiry received successfully. Our engineering team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
