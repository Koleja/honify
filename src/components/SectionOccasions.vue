<template>
  <section id="occasions">
    <div class="banner">
      <div class="banner-bg"></div>
      <div class="banner-overlay"></div>
      <div class="banner-content" data-reveal>
        <div class="label">04 — Perfect For</div>
        <h2>Made for moments that deserve something extraordinary</h2>
      </div>
    </div>

    <div class="cards-wrap">
      <div class="grid">
        <div class="card" data-reveal>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="9" width="16" height="11" rx="1"/>
            <path d="M4 9V7.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1V9M12 6.5V20M12 6.5c-.8-2-3.6-3-4.8-1.2S8.2 7.3 12 6.5zM12 6.5c.8-2 3.6-3 4.8-1.2S15.8 7.3 12 6.5z"/>
          </svg>
          <h3>Personal gifting</h3>
          <p>A birthday, a thank you, a gesture that says more than words. A box of Honify pralines is a gift people remember.</p>
        </div>

        <div class="card" data-reveal>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/>
            <path d="M7 8.5 9 5l2 3.5M13 8.5 15 5l2 3.5"/>
          </svg>
          <h3>Weddings &amp; celebrations</h3>
          <p>Elegant, handcrafted, and utterly memorable — a refined addition to any occasion, from wedding favours to celebration tables.</p>
        </div>

        <div class="card" data-reveal>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="3" width="14" height="18" rx="1"/>
            <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M9 21v-3h6v3"/>
          </svg>
          <h3>Corporate gifting</h3>
          <p>Leave a lasting impression on clients, partners, and teams. Honify pralines are a step above the ordinary corporate gift.</p>
        </div>

        <div class="card" data-reveal>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3l2.4 5.3 5.6.6-4.2 3.8 1.2 5.6L12 21.4 6.9 18.9l1.2-5.6L4 9.5l5.6-.6z"/>
          </svg>
          <h3>Personal indulgence</h3>
          <p>Sometimes the occasion is simply a quiet moment with something exceptional. That's reason enough.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { position: relative; }
.banner {
  position: relative;
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 24px;
  overflow: hidden;
}
.banner-bg {
  position: absolute; inset: 0;
  background-image: url('/assets/perfect-for.jpg');
  background-size: cover;
  background-position-y: 85%;
}
.banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(23,20,15,0.7), rgba(0,0,0,0.88));
}
.banner-content {
  position: relative;
  max-width: 640px;
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
  line-height: 1.12;
  color: #F5F0E8;
  margin: 0;
}
.cards-wrap {
  background: #17140F;
  padding: clamp(64px, 8vw, 96px) clamp(20px, 6vw, 80px);
}
.grid {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
}
.card {
  padding: 36px 28px;
  border: 1px solid rgba(252, 173, 0, 0.12);
  border-radius: 14px;
  transition: border-color .3s ease;
}
.card:hover { border-color: rgba(252, 173, 0, 0.4); }
.card svg { margin-bottom: 20px; display: block; }
h3 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 21px;
  color: #F5F0E8;
  margin: 0 0 12px;
}
p {
  font-size: 14px;
  line-height: 1.75;
  color: #A69C89;
  font-weight: 300;
  margin: 0;
}
</style>
