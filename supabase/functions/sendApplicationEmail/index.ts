import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST" },
    });
  }

  try {
    const { email, name, jobTitle } = await req.json();

    if (!email || !name || !jobTitle) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", 
        to: "test.waazes@gmail.com",
        subject: `Application Received for ${jobTitle}`,
        html: `<p>Dear ${name},</p>
               <p>Thank you for applying for the <strong>${jobTitle}</strong> position.</p>
               <p>We will review your application and get back to you soon.</p>
               <p>Best Regards,</p>
               <p>The Waazes Team</p>`
      })
    });

    return new Response(JSON.stringify(await response.json()), { 
      status: response.status,
      headers: { "Access-Control-Allow-Origin": "*" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }  
});
