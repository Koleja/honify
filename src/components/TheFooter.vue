<template>
  <footer>
    <div class="inner">
      <div class="brand">
        <img src="/assets/logo-mark.svg" alt="Honify" />
        <div>
          <div class="name">HONIFY</div>
          <div class="sub">Pralines</div>
        </div>
      </div>
      <p class="tagline">Amplified by honey.</p>
      <div class="copy">© 2026 Honify Pralines. Handmade in small batches.</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #17140F;
  border-top: 1px solid rgba(251, 172, 0, 0.12);
  padding: 56px clamp(20px, 6vw, 80px);
}
.inner {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand { display: flex; align-items: center; gap: 14px; }
.brand img { height: 44px; width: 44px; }
.name {
  font-family: var(--serif);
  font-size: 19px;
  letter-spacing: 0.22em;
  color: #FBAC00;
}
.sub {
  font-size: 10px;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: #8A8069;
  margin-top: 2px;
}
.tagline {
  font-family: var(--serif);
  font-style: italic;
  font-size: 16px;
  color: #A69C89;
  margin: 0;
}
.copy {
  font-size: 12px;
  color: #8A8069;
  letter-spacing: 0.06em;
}
</style>
