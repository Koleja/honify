import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHero from '../TheHero.vue'

describe('TheHero', () => {
  it('renders the main heading', () => {
    const wrapper = mount(TheHero)
    expect(wrapper.find('h1').text()).toContain('Pralines crafted')
    expect(wrapper.find('h1').text()).toContain('to perfection')
  })

  it('renders the tagline paragraph', () => {
    const wrapper = mount(TheHero)
    expect(wrapper.text()).toContain('Every piece is made by hand')
  })

  it('renders the CTA button linking to pralines section', () => {
    const wrapper = mount(TheHero)
    const cta = wrapper.find('.btn-primary')
    expect(cta.exists()).toBe(true)
    expect(cta.attributes('href')).toBe('#pralines')
    expect(cta.text()).toContain('Explore our pralines')
  })

  it('renders the scroll hint', () => {
    const wrapper = mount(TheHero)
    expect(wrapper.find('.scroll-hint').exists()).toBe(true)
    expect(wrapper.text()).toContain('Scroll')
  })

  it('renders the wordmark image', () => {
    const wrapper = mount(TheHero)
    const img = wrapper.find('.wordmark')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/assets/logo-wordmark.svg')
  })

  it('has data-reveal attributes on animated elements', () => {
    const wrapper = mount(TheHero)
    const revealEls = wrapper.findAll('[data-reveal]')
    expect(revealEls.length).toBeGreaterThan(0)
  })
})
