<template>
  <header id="top">
    <div class="bg"></div>
    <div class="overlay-radial"></div>
    <div class="overlay-linear"></div>
    <div class="content">
      <img src="/assets/logo-wordmark.svg" alt="Honify Pralines" data-reveal class="wordmark" />
      <div class="divider" data-reveal></div>
      <h1 data-reveal>Pralines crafted<br />to perfection</h1>
      <p data-reveal>Every piece is made by hand, with the finest ingredients and an obsession for detail. This is chocolate as it should be.</p>
      <a href="#pralines" data-reveal class="btn-primary">Explore our pralines</a>
    </div>
    <div class="scroll-hint">
      <span class="scroll-label">Scroll</span>
      <span class="line"></span>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 140px;
  overflow: hidden;
}
.bg {
  position: absolute; inset: 0;
  background-image: url('/assets/signature.jpg');
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
}
.overlay-radial {
  position: absolute; inset: 0;
  background: radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0.35) 0%, rgba(23,20,15,0.7) 55%, rgba(0,0,0,0.94) 100%);
}
.overlay-linear {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.9) 100%);
}
.content {
  position: relative;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wordmark { width: min(340px, 72vw); height: auto; margin-bottom: 36px; }
.divider {
  width: 54px; height: 1px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  margin-bottom: 30px;
}
h1 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(38px, 6.4vw, 72px);
  line-height: 1.05;
  letter-spacing: 0.01em;
  color: #F5F0E8;
  margin: 0 0 22px;
}
p {
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.7;
  color: #B7AC97;
  max-width: 560px;
  margin: 0 0 40px;
  font-weight: 300;
}
.btn-primary {
  background: var(--accent);
  color: #17140F;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 13px;
  padding: 17px 40px;
  border-radius: 100px;
  transition: transform .15s ease, background .15s ease;
  text-decoration: none;
}
.btn-primary:hover { background: #E39C00; transform: translateY(-2px); color: #17140F; }
.scroll-hint {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-label {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8A8069;
}
.line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}
</style>
