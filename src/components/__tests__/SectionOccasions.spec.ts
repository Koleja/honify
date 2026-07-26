import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionOccasions from '../SectionOccasions.vue'

describe('SectionOccasions', () => {
  it('renders the banner heading', () => {
    const wrapper = mount(SectionOccasions)
    expect(wrapper.find('h2').text()).toContain('Made for moments that deserve something extraordinary')
  })

  it('renders the section label', () => {
    const wrapper = mount(SectionOccasions)
    expect(wrapper.text()).toContain('04 — Perfect For')
  })

  it('renders exactly 4 occasion cards', () => {
    const wrapper = mount(SectionOccasions)
    expect(wrapper.findAll('.card')).toHaveLength(4)
  })

  it('renders all occasion titles', () => {
    const wrapper = mount(SectionOccasions)
    const headings = wrapper.findAll('h3').map((h) => h.text())
    expect(headings).toContain('Personal gifting')
    expect(headings).toContain('Weddings & celebrations')
    expect(headings).toContain('Corporate gifting')
    expect(headings).toContain('Personal indulgence')
  })

  it('each card has a description', () => {
    const wrapper = mount(SectionOccasions)
    wrapper.findAll('.card p').forEach((p) => {
      expect(p.text().length).toBeGreaterThan(0)
    })
  })

  it('has the correct section id', () => {
    const wrapper = mount(SectionOccasions)
    expect(wrapper.find('section').attributes('id')).toBe('occasions')
  })
})
