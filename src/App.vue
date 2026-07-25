<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import TheNav from './components/TheNav.vue'
import TheHero from './components/TheHero.vue'
import SectionPralines from './components/SectionPralines.vue'
import SectionStory from './components/SectionStory.vue'
import SectionWhy from './components/SectionWhy.vue'
import SectionOccasions from './components/SectionOccasions.vue'
import SectionTestimonials from './components/SectionTestimonials.vue'
import SectionContact from './components/SectionContact.vue'
import TheFooter from './components/TheFooter.vue'

let observer: IntersectionObserver

onMounted(() => {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  els.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity .85s cubic-bezier(.2,.7,.2,1), transform .85s cubic-bezier(.2,.7,.2,1)'
    el.style.willChange = 'opacity, transform'
  })
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )
  els.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <TheNav />
  <TheHero />
  <SectionPralines />
  <SectionStory />
  <SectionWhy />
  <SectionOccasions />
  <SectionTestimonials />
  <SectionContact />
  <TheFooter />
</template>
