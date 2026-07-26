import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TheNav from '../TheNav.vue'

describe('TheNav', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    Object.defineProperty(window, 'innerWidth', { value: 1280, writable: true, configurable: true })
  })

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    Object.defineProperty(window, 'innerWidth', { value: 1280, writable: true, configurable: true })
  })

  it('renders the HONIFY brand name', () => {
    const wrapper = mount(TheNav)
    expect(wrapper.text()).toContain('HONIFY')
  })

  it('renders all desktop navigation links', () => {
    const wrapper = mount(TheNav)
    const text = wrapper.text()
    expect(text).toContain('Pralines')
    expect(text).toContain('Story')
    expect(text).toContain('Why Honify')
    expect(text).toContain('Occasions')
    expect(text).toContain('Get in touch')
  })

  it('nav links point to correct section anchors', () => {
    const wrapper = mount(TheNav)
    const hrefs = wrapper.findAll('.links a').map((a) => a.attributes('href'))
    expect(hrefs).toContain('#pralines')
    expect(hrefs).toContain('#story')
    expect(hrefs).toContain('#why')
    expect(hrefs).toContain('#occasions')
    expect(hrefs).toContain('#contact')
  })

  it('brand logo links to #top', () => {
    const wrapper = mount(TheNav)
    expect(wrapper.find('.brand').attributes('href')).toBe('#top')
  })

  it('does not have scrolled class when at top of page', () => {
    const wrapper = mount(TheNav)
    expect(wrapper.find('nav').classes()).not.toContain('scrolled')
  })

  it('adds scrolled class when scrolled past 60px', async () => {
    const wrapper = mount(TheNav)
    Object.defineProperty(window, 'scrollY', { value: 61, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('nav').classes()).toContain('scrolled')
  })

  it('removes scrolled class when scrolled back to top', async () => {
    const wrapper = mount(TheNav)
    Object.defineProperty(window, 'scrollY', { value: 61, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('nav').classes()).not.toContain('scrolled')
  })

  it('removes scroll and resize listeners on unmount', () => {
    const wrapper = mount(TheNav)
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    wrapper.unmount()
    const calls = removeSpy.mock.calls.map((c) => c[0])
    expect(calls).toContain('scroll')
    expect(calls).toContain('resize')
  })

  describe('mobile menu', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'innerWidth', { value: 600, writable: true, configurable: true })
    })

    it('shows hamburger button on mobile', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      expect(wrapper.find('.menu-btn').exists()).toBe(true)
    })

    it('hides desktop links on mobile', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      expect(wrapper.find('.links').classes()).toContain('hidden')
    })

    it('opens mobile menu when hamburger is clicked', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      await wrapper.find('.menu-btn').trigger('click')
      await nextTick()
      expect(wrapper.find('.mobile-menu').exists()).toBe(true)
    })

    it('closes mobile menu when close button is clicked', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      await wrapper.find('.menu-btn').trigger('click')
      await nextTick()
      await wrapper.find('.menu-close').trigger('click')
      await nextTick()
      expect(wrapper.find('.mobile-menu').exists()).toBe(false)
    })

    it('closes mobile menu when a mobile link is clicked', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      await wrapper.find('.menu-btn').trigger('click')
      await nextTick()
      await wrapper.find('.mobile-link').trigger('click')
      await nextTick()
      expect(wrapper.find('.mobile-menu').exists()).toBe(false)
    })

    it('mobile menu contains all section links', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      await wrapper.find('.menu-btn').trigger('click')
      await nextTick()
      const hrefs = wrapper.findAll('.mobile-link').map((a) => a.attributes('href'))
      expect(hrefs).toContain('#pralines')
      expect(hrefs).toContain('#story')
      expect(hrefs).toContain('#why')
      expect(hrefs).toContain('#occasions')
      expect(hrefs).toContain('#contact')
    })

    it('closes mobile menu automatically when resized to desktop', async () => {
      const wrapper = mount(TheNav)
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      await wrapper.find('.menu-btn').trigger('click')
      await nextTick()
      expect(wrapper.find('.mobile-menu').exists()).toBe(true)

      Object.defineProperty(window, 'innerWidth', { value: 1280, configurable: true })
      window.dispatchEvent(new Event('resize'))
      await nextTick()
      expect(wrapper.find('.mobile-menu').exists()).toBe(false)
    })
  })
})
