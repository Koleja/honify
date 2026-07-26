import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionWhy from '../SectionWhy.vue'

describe('SectionWhy', () => {
  it('renders the section heading', () => {
    const wrapper = mount(SectionWhy)
    expect(wrapper.find('h2').text()).toBe('Honest by every measure')
  })

  it('renders the section label', () => {
    const wrapper = mount(SectionWhy)
    expect(wrapper.text()).toContain('03 — Why Honify')
  })

  it('renders exactly 4 feature cards', () => {
    const wrapper = mount(SectionWhy)
    expect(wrapper.findAll('.feature')).toHaveLength(4)
  })

  it('renders all feature headings', () => {
    const wrapper = mount(SectionWhy)
    const headings = wrapper.findAll('h3').map((h) => h.text())
    expect(headings).toContain('Honey at the heart')
    expect(headings).toContain('100% dark chocolate')
    expect(headings).toContain('Handmade in small batches')
    expect(headings).toContain('Natural by principle')
  })

  it('each feature has an icon', () => {
    const wrapper = mount(SectionWhy)
    const icons = wrapper.findAll('.icon')
    expect(icons).toHaveLength(4)
  })

  it('has the correct section id', () => {
    const wrapper = mount(SectionWhy)
    expect(wrapper.find('section').attributes('id')).toBe('why')
  })
})
