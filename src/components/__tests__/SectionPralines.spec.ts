import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionPralines from '../SectionPralines.vue'

describe('SectionPralines', () => {
  it('renders the section heading', () => {
    const wrapper = mount(SectionPralines)
    expect(wrapper.find('h2').text()).toBe('Our pralines')
  })

  it('renders the collection label', () => {
    const wrapper = mount(SectionPralines)
    expect(wrapper.text()).toContain('01 — The Collection')
  })

  it('renders both praline product cards', () => {
    const wrapper = mount(SectionPralines)
    const cards = wrapper.findAll('article.card')
    expect(cards).toHaveLength(2)
  })

  it('renders the Signature card with correct title', () => {
    const wrapper = mount(SectionPralines)
    const headings = wrapper.findAll('h3').map((h) => h.text())
    expect(headings).toContain('Signature')
  })

  it('renders the Creamed card with correct title', () => {
    const wrapper = mount(SectionPralines)
    const headings = wrapper.findAll('h3').map((h) => h.text())
    expect(headings).toContain('Creamed')
  })

  it('renders flavour tags for the Signature line', () => {
    const wrapper = mount(SectionPralines)
    const tagTexts = wrapper.findAll('.tag').map((t) => t.text())
    expect(tagTexts).toContain('Barberry')
    expect(tagTexts).toContain('Peanut')
  })

  it('renders a contact link in the footer note', () => {
    const wrapper = mount(SectionPralines)
    const link = wrapper.find('.footer-note a')
    expect(link.attributes('href')).toBe('#contact')
  })

  it('has the correct section id for anchor navigation', () => {
    const wrapper = mount(SectionPralines)
    expect(wrapper.find('section').attributes('id')).toBe('pralines')
  })
})
