<template>
  <section id="testimonials">
    <div class="inner">
      <div class="intro" data-reveal>
        <div class="label">05 — What People Say</div>
        <h2>Words from the table</h2>
      </div>

      <div class="grid">
        <figure data-reveal class="quote">
          <div class="stars">★★★★★</div>
          <blockquote>"I've never tasted anything quite like it. You can actually feel the quality of the honey — it's unlike any chocolate I've had before."</blockquote>
          <figcaption>Anna K. — Warsaw</figcaption>
        </figure>

        <figure data-reveal class="quote">
          <div class="stars">★★★★★</div>
          <blockquote>"We ordered Honify pralines as corporate gifts and the feedback was overwhelming. Everyone wanted to know where they came from."</blockquote>
          <figcaption>Piotr M. — CEO</figcaption>
        </figure>

        <figure data-reveal class="quote">
          <div class="stars">★★★★★</div>
          <blockquote>"Michał's story comes through in every single piece. This is chocolate made with real passion and purpose."</blockquote>
          <figcaption>Marta W. — Prague</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 70px;
  background: #201C15;
  padding: clamp(80px, 10vw, 130px) clamp(20px, 6vw, 80px);
}
.inner { max-width: 1180px; margin: 0 auto; }
.intro { text-align: center; margin-bottom: 64px; }
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
  font-size: clamp(28px, 4vw, 46px);
  line-height: 1.12;
  color: #F5F0E8;
  margin: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.quote {
  margin: 0;
  padding: 38px 32px;
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(252, 173, 0, 0.22);
  border-radius: 16px;
}
.stars {
  color: #FBAC00;
  letter-spacing: 3px;
  font-size: 14px;
  margin-bottom: 20px;
}
blockquote {
  font-family: var(--serif);
  font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  color: #EFE7D8;
  margin: 0 0 24px;
}
figcaption {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C9A46A;
}
</style>
