<template>
  <section id="contact">
    <div class="inner">
      <div class="intro" data-reveal>
        <div class="label">06 — Get in Touch</div>
        <h2>Let's make something memorable</h2>
        <p>Whether you're ordering a box for yourself or planning something special, we'd love to hear from you.</p>
      </div>

      <div class="cards">
        <div class="card" data-reveal>
          <h3>Custom orders</h3>
          <p>Looking for a personalised gift for a wedding, birthday, or special occasion? We create bespoke boxes tailored to your needs — just let us know what you have in mind.</p>
        </div>
        <div class="card" data-reveal>
          <h3>Corporate gifting</h3>
          <p>Make an impression with Honify pralines. We work with businesses to deliver refined, memorable gifts for clients, partners, and teams.</p>
        </div>
      </div>

      <div class="cta-wrap" data-reveal>
        <div class="cta-buttons">
          <a href="mailto:contact@honify.au" class="btn-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
            contact@honify.au
          </a>
          <a href="https://www.instagram.com/honify_pralines/" target="_blank" rel="noopener" class="btn-outline">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
            </svg>
            @honify_pralines
          </a>
        </div>
        <p class="response-note">We typically respond within 24 hours.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 70px;
  padding: clamp(80px, 11vw, 140px) clamp(20px, 6vw, 80px);
  background: #17140F;
  border-top: 1px solid rgba(252, 173, 0, 0.08);
}
.inner { max-width: 1080px; margin: 0 auto; }
.intro {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}
.label {
  font-size: 12px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 18px;
}
h2 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(30px, 4.4vw, 52px);
  line-height: 1.1;
  color: #F5F0E8;
  margin: 0 0 22px;
}
.intro p {
  font-size: 16px;
  line-height: 1.8;
  color: #B7AC97;
  font-weight: 300;
  margin: 0;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 56px;
}
.card {
  padding: 38px 34px;
  border: 1px solid rgba(252, 173, 0, 0.16);
  border-radius: 16px;
  background: #201C15;
}
h3 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 23px;
  color: #F5F0E8;
  margin: 0 0 14px;
}
.card p {
  font-size: 15px;
  line-height: 1.8;
  color: #B7AC97;
  font-weight: 300;
  margin: 0;
}
.cta-wrap {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}
.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--accent);
  color: #17140F;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 13px;
  padding: 16px 34px;
  border-radius: 100px;
  transition: transform .15s ease, background .15s ease;
  text-decoration: none;
}
.btn-primary:hover { background: #E39C00; transform: translateY(-2px); color: #17140F; }
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(252, 173, 0, 0.4);
  color: #FBAC00;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 13px;
  padding: 16px 34px;
  border-radius: 100px;
  transition: background .2s ease, border-color .2s ease;
  text-decoration: none;
}
.btn-outline:hover { background: rgba(252, 173, 0, 0.08); border-color: #FBAC00; color: #FBAC00; }
.response-note {
  font-size: 13px;
  letter-spacing: 0.04em;
  color: #8A8069;
  font-weight: 300;
  margin: 0;
}
</style>
