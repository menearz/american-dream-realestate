// Cloudflare Pages Function — handles POST /api/contact
//
// REQUIRED ENVIRONMENT VARIABLES (set in Cloudflare Pages dashboard:
//   Settings → Environment variables → Production):
//
//   RESEND_API_KEY     Your Resend API key, format "re_xxx..."
//   CONTACT_TO_EMAIL   Where submissions should land (e.g. "you@yourdomain.com")
//   CONTACT_FROM_EMAIL Verified Resend sender (e.g. "site@americandreamrealestate.com")
//
// FOR INITIAL TESTING you can set CONTACT_FROM_EMAIL to "onboarding@resend.dev"
// (Resend's sandbox sender) and CONTACT_TO_EMAIL to the address registered with
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

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
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
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `American Dream Real Estate <${env.CONTACT_FROM_EMAIL}>`,
      to: [env.CONTACT_TO_EMAIL],
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
