<template>
  <section id="why">
    <div class="inner">
      <div class="intro" data-reveal>
        <div class="label">03 — Why Honify</div>
        <h2>Honest by every measure</h2>
      </div>

      <div class="grid">
        <div class="feature" data-reveal>
          <div class="icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2.5c0 0 6 6.8 6 11.2a6 6 0 0 1-12 0C6 9.3 12 2.5 12 2.5z"/>
              <path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5"/>
            </svg>
          </div>
          <h3>Honey at the heart</h3>
          <p>Every praline is built around real, raw honey — liquid or creamed. No syrups, no substitutes. Just honey as nature intended.</p>
        </div>

        <div class="feature" data-reveal>
          <div class="icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <path d="M4 10h16M4 15h16M10 4v16M15 4v16"/>
            </svg>
          </div>
          <h3>100% dark chocolate</h3>
          <p>We use only pure dark chocolate — nothing diluted, nothing artificial. It's the perfect shell for an honest filling.</p>
        </div>

        <div class="feature" data-reveal>
          <div class="icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 12.5V6.2a1.4 1.4 0 0 1 2.8 0v5.1"/>
              <path d="M10.8 11.3V5a1.4 1.4 0 0 1 2.8 0v6.3"/>
              <path d="M13.6 11.3V6.6a1.4 1.4 0 0 1 2.8 0v6.9a6 6 0 0 1-6 6 5 5 0 0 1-4-2l-2.7-3.6a1.5 1.5 0 0 1 2.3-1.9L8 13.6"/>
            </svg>
          </div>
          <h3>Handmade in small batches</h3>
          <p>Each piece is crafted by hand, one batch at a time. No factory lines, no compromise on quality.</p>
        </div>

        <div class="feature" data-reveal>
          <div class="icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 20c0-8 5.5-14 15-14 0 9.5-5.5 15-15 14z"/>
              <path d="M5 20c3.5-5.5 7.5-9 12-11"/>
            </svg>
          </div>
          <h3>Natural by principle</h3>
          <p>From the honey to the nuts and dried fruits, every ingredient is chosen to complement — never overpower — the natural goodness inside.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 70px;
  padding: clamp(80px, 11vw, 140px) clamp(20px, 6vw, 80px);
  background: #17140F;
}
.inner { max-width: 1180px; margin: 0 auto; }
.intro { text-align: center; margin-bottom: 72px; }
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
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
}
.feature { text-align: center; padding: 40px 26px; }
.icon {
  width: 74px; height: 74px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  background: rgba(252, 173, 0, 0.07);
  border: 1px solid rgba(252, 173, 0, 0.22);
}
h3 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 20px;
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
