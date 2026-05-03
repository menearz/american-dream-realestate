// Cloudflare Pages Function — handles POST /api/contact
//
// REQUIRED ENVIRONMENT VARIABLES (set in Cloudflare Pages dashboard:
//   Settings → Environment variables → Production). Names are case-sensitive
//   — these match the lowercase variables already set in the dashboard:
//
//   resend_api_key     Your Resend API key, format "re_xxx..."
//   contact_to_email   Where submissions should land (e.g. "you@yourdomain.com")
//   contact_from_email Verified Resend sender (e.g. "site@americandreamrealestate.com")
//
// FOR INITIAL TESTING you can set contact_from_email to "onboarding@resend.dev"
// (Resend's sandbox sender) and contact_to_email to the address registered with
// your Resend account. Production needs a verified domain.

const REDIRECT = (url, request) =>
  Response.redirect(new URL(url, request.url).toString(), 303);

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

export async function onRequestPost({ request, env }) {
  const form = await request.formData();

  // Honeypot: bots fill hidden fields; humans don't see them.
  // Silently redirect spammers to the thank-you page so they think it worked.
  if ((form.get('website') || '').toString().trim() !== '') {
    return REDIRECT('/thank-you.html', request);
  }

  const name = (form.get('name') || '').toString().trim();
  const email = (form.get('email') || '').toString().trim();
  const phone = (form.get('phone') || '').toString().trim();
  const message = (form.get('message') || '').toString().trim();

  if (!name || !email || !message || !email.includes('@')) {
    return REDIRECT('/contact.html?error=missing', request);
  }

  if (!env.resend_api_key || !env.contact_to_email || !env.contact_from_email) {
    return REDIRECT('/contact.html?error=config', request);
  }

  const html = `
    <h2>New contact from americandreamrealestate.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const text =
    `New contact from americandreamrealestate.com\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || '—'}\n\n` +
    `Message:\n${message}\n`;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resend_api_key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `American Dream Real Estate <${env.contact_from_email}>`,
      to: [env.contact_to_email],
      reply_to: email,
      subject: `New contact from ${name}`,
      html,
      text,
    }),
  });

  if (!resendResponse.ok) {
    return REDIRECT('/contact.html?error=send', request);
  }

  return REDIRECT('/thank-you.html', request);
}
