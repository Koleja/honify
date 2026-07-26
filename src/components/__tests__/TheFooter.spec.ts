import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from '../TheFooter.vue'

describe('TheFooter', () => {
  it('renders the HONIFY brand name', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.find('.name').text()).toBe('HONIFY')
  })

  it('renders the Pralines sub-label', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.find('.sub').text()).toBe('Pralines')
  })

  it('renders the brand tagline', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.find('.tagline').text()).toBe('Honey, amplified.')
  })

  it('renders the copyright notice', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.find('.copy').text()).toContain('© 2026 Honify Pralines')
  })

  it('renders the logo mark image', () => {
    const wrapper = mount(TheFooter)
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/assets/logo-mark.svg')
    expect(img.attributes('alt')).toBe('Honify')
  })
})
