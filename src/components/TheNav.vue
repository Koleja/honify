<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)
const isMobile = ref(false)
const menuOpen = ref(false)

let onScroll: () => void
let onResize: () => void

function openMenu() {
  menuOpen.value = true
}

function closeMenu() {
  menuOpen.value = false
}

function onLinkClick() {
  closeMenu()
}

onMounted(() => {
  onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  onResize = () => {
    isMobile.value = window.innerWidth <= 860
    if (!isMobile.value) closeMenu()
  }
  window.addEventListener('resize', onResize)
  onResize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <nav :class="{ scrolled }">
    <a href="#top" class="brand">
      <img src="/assets/logo-mark.svg" alt="Honify" />
      <span>HONIFY</span>
    </a>

    <div class="links" :class="{ hidden: isMobile }">
      <a href="#pralines">Pralines</a>
      <a href="#story">Story</a>
      <a href="#why">Why Honify</a>
      <a href="#occasions">Occasions</a>
      <a href="#contact" class="cta">Get in touch</a>
    </div>

    <button v-if="isMobile" class="menu-btn" aria-label="Open menu" @click="openMenu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FBAC00" stroke-width="1.8" stroke-linecap="round">
        <path d="M4 7h16M4 12h16M4 17h16"/>
      </svg>
    </button>
  </nav>

  <Transition name="mobile-menu">
    <div v-if="menuOpen" class="mobile-menu" role="dialog" aria-modal="true">
      <button class="menu-close" aria-label="Close menu" @click="closeMenu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FBAC00" stroke-width="1.8" stroke-linecap="round">
          <path d="M5 5l14 14M19 5L5 19"/>
        </svg>
      </button>

      <a href="#pralines" class="mobile-link" @click="onLinkClick">Pralines</a>
      <a href="#story" class="mobile-link" @click="onLinkClick">Story</a>
      <a href="#why" class="mobile-link" @click="onLinkClick">Why Honify</a>
      <a href="#occasions" class="mobile-link" @click="onLinkClick">Occasions</a>
      <a href="#contact" class="mobile-link mobile-cta" @click="onLinkClick">Get in touch</a>
    </div>
  </Transition>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px clamp(20px, 5vw, 64px);
  border-bottom: 1px solid transparent;
  background: transparent;
  transition: background .3s ease, border-color .3s ease, backdrop-filter .3s ease;
}
nav.scrolled {
  background: rgba(23, 20, 15, 0.92);
  border-bottom-color: rgba(252, 173, 0, 0.16);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.brand img { height: 42px; width: 42px; display: block; }
.brand span {
  font-family: var(--serif);
  font-size: 20px;
  letter-spacing: 0.22em;
  color: #FBAC00;
  font-weight: 400;
}
.links {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 40px);
}
.links.hidden { display: none; }
.links a {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C9C0B0;
  font-weight: 400;
  transition: color .2s ease;
  text-decoration: none;
}
.links a:hover { color: #FBAC00; }
.links a.cta {
  color: #17140F;
  font-weight: 500;
  background: var(--accent);
  padding: 11px 22px;
  border-radius: 100px;
  letter-spacing: 0.16em;
  transition: transform .15s ease, background .15s ease;
}
.links a.cta:hover { background: #E39C00; transform: translateY(-1px); color: #17140F; }

.menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  background: transparent;
  border: 1px solid rgba(251, 172, 0, 0.32);
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  transition: opacity .2s ease;
}
.menu-btn:hover { opacity: 0.7; }

/* Mobile menu overlay */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: #17140F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.menu-close {
  position: absolute;
  top: 18px;
  right: clamp(20px, 5vw, 64px);
  width: 40px; height: 40px;
  background: transparent;
  border: 1px solid rgba(251, 172, 0, 0.32);
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-link {
  font-family: var(--serif);
  font-size: 26px;
  color: #F5F0E8;
  text-decoration: none;
  transition: color .2s ease;
}
.mobile-link:hover { color: var(--accent); }
.mobile-cta {
  margin-top: 12px;
  font-family: 'Jost', system-ui, sans-serif;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #17140F;
  font-weight: 500;
  background: var(--accent);
  padding: 15px 34px;
  border-radius: 100px;
}
.mobile-cta:hover { background: #E39C00; color: #17140F; }

/* Transition */
.mobile-menu-enter-active { transition: opacity .32s ease; }
.mobile-menu-leave-active { transition: opacity .32s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; }
</style>
