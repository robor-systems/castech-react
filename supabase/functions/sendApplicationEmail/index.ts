import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST" },
    });
  }

  try {
    const { name, email, phone, address, relocation, startDate, immigrationStatus, workPermitExpiry, resume, jobTitle } = await req.json();

    if (!name || !email || !phone || !address || !relocation || !startDate || !immigrationStatus || !resume || !jobTitle) {
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
        subject: `New Job Application: ${jobTitle}`,
        html: `
         <p style="color: black;"><strong>Job Title:</strong> ${jobTitle}</p>
         <p style="color: black;"><strong>Name:</strong> ${name}</p>
         <p style="color: black;"><strong>Email:</strong> ${email}</p>
         <p style="color: black;"><strong>Phone:</strong> ${phone}</p>
         <p style="color: black;"><strong>Address:</strong> ${address}</p>
         <p style="color: black;"><strong>Relocation:</strong> ${relocation}</p>
         <p style="color: black;"><strong>Preferred Start Date:</strong> ${startDate}</p>
         <p style="color: black;"><strong>Immigration Status:</strong> ${immigrationStatus}</p>
         <p style="color: black;"><strong>Work Permit Expiry:</strong> ${workPermitExpiry || "N/A"}</p>
         <p style="color: black;"><strong>Resume:</strong> <a href="${resume}" target="_blank">Download Resume</a></p>
        `
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
