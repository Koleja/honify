<template>
  <section id="pralines">
    <div class="inner">
      <div class="intro" data-reveal>
        <div class="label">01 — The Collection</div>
        <h2>Our pralines</h2>
        <p>Every Honify praline begins the same way — 100% dark chocolate, pure honey, and nothing to hide behind. From there, each piece tells its own story.</p>
      </div>

      <div class="grid">
        <article data-reveal class="card">
          <div class="card-img" style="background-image: url('/assets/signature-praline.jpg')"></div>
          <div class="card-body">
            <div class="card-label">Line 01 · Liquid honey</div>
            <h3>Signature</h3>
            <p class="tagline">Dark chocolate shell with liquid honey at the heart.</p>
            <p class="desc">Each variant pairs the raw intensity of liquid honey with a single, carefully chosen ingredient. Current flavours include barberry, peanut, and more — a rotating cast of bold, pure combinations.</p>
            <div class="tags">
              <span class="tag">Barberry</span>
              <span class="tag">Peanut</span>
              <span class="tag tag--dashed">+ more, rotating</span>
            </div>
          </div>
        </article>

        <article data-reveal class="card">
          <div class="card-img" style="background-image: url('/assets/creamed.jpg')"></div>
          <div class="card-body">
            <div class="card-label-row">
              <div class="card-label">Line 02 · Creamed honey</div>
              <!-- <span class="coming-soon">Coming soon</span> -->
            </div>
            <h3>Creamed</h3>
            <p class="tagline">Dark chocolate shell with smooth creamed honey at the heart.</p>
            <p class="desc">Richer and more rounded, the Creamed line brings a softer sweetness to the fore. Paired with nuts or dried fruits, each piece is indulgent without ever being excessive.</p>
            <div class="tags">
              <span class="tag">Hazelnut</span>
              <span class="tag">Almond</span>
              <span class="tag tag--dashed">+ more, rotating</span>
            </div>
          </div>
        </article>
      </div>

      <p class="footer-note" data-reveal>
        Both lines are available as individual pieces or assembled into gift boxes. Every batch is made by hand in small quantities —
        <a href="#contact">reach out to find out what's available now</a>.
      </p>
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
.intro {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 72px;
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
  margin: 0 0 24px;
}
.intro p {
  font-size: 17px;
  line-height: 1.8;
  color: #B7AC97;
  font-weight: 300;
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
.card {
  border: 1px solid rgba(252, 173, 0, 0.16);
  border-radius: 16px;
  overflow: hidden;
  background: #201C15;
  transition: border-color .3s ease, transform .3s ease;
}
.card:hover { border-color: rgba(252, 173, 0, 0.42); transform: translateY(-4px); }
.card-img {
  height: 250px;
  background-size: cover;
  background-position: center;
}
.card-body { padding: 34px 34px 40px; }
.card-label {
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 14px;
}
.card-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.coming-soon {
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8A8069;
  border: 1px solid rgba(252, 173, 0, 0.28);
  border-radius: 100px;
  padding: 5px 13px;
  white-space: nowrap;
}
h3 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 30px;
  color: #F5F0E8;
  margin: 0 0 6px;
}
.tagline {
  font-size: 14px;
  color: #8A8069;
  font-style: italic;
  margin: 0 0 20px;
  font-weight: 300;
}
.desc {
  font-size: 15px;
  line-height: 1.8;
  color: #B7AC97;
  font-weight: 300;
  margin: 0;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}
.tag {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C9A46A;
  border: 1px solid rgba(252, 173, 0, 0.28);
  border-radius: 100px;
  padding: 6px 15px;
}
.tag--dashed {
  color: #8A8069;
  border-style: dashed;
  border-color: rgba(252, 173, 0, 0.24);
}
.footer-note {
  text-align: center;
  max-width: 680px;
  margin: 56px auto 0;
  font-size: 15px;
  line-height: 1.8;
  color: #8A8069;
  font-weight: 300;
}
.footer-note a { color: var(--accent); }
.footer-note a:hover { color: #E39C00; }
</style>
