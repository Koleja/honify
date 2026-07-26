<template>
  <section id="story">
    <div class="inner">
      <div class="img" data-reveal></div>
      <div class="text" data-reveal>
        <div class="label">02 — Our Story</div>
        <p class="pull-quote">Honify began in a beehive.</p>
        <p>Michał spent years as a beekeeper, developing a deep respect for honey — its complexity, its purity, its quiet power. Fascinated by its many forms, he started experimenting: liquid, creamed, infused. One challenge led to another, and eventually he asked himself — could honey alone become something you'd find in a fine chocolate box?</p>
        <p>Every praline is built around that original conviction: honey deserves to be celebrated. No artificial sweeteners, no shortcuts — just raw, natural honey at the heart of each piece, protected by 100% dark chocolate and paired with the finest ingredients.</p>
        <p class="closing">In a world full of overly sweet confections, Honify is something different.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 70px;
  background: #201C15;
  border-top: 1px solid rgba(251, 172, 0, 0.1);
}
.inner {
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: stretch;
}
.img {
  min-height: 520px;
  background-image: url('/assets/honey-pour.jpg');
  background-size: cover;
  background-position: center;
  background-position-y: 65%;
}
.text {
  padding: clamp(56px, 7vw, 96px) clamp(28px, 5vw, 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.label {
  font-size: 12px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 18px;
}
.pull-quote {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.25;
  color: #FBAC00;
  margin: 0 0 32px;
}
p {
  font-size: 15.5px;
  line-height: 1.85;
  color: #B7AC97;
  font-weight: 300;
  margin: 0 0 20px;
}
.closing {
  font-size: 15.5px;
  line-height: 1.85;
  color: #E7DECB;
  font-weight: 400;
  margin: 0;
}
</style>
