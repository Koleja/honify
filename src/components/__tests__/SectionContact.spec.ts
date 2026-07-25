import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionContact from '../SectionContact.vue'

describe('SectionContact', () => {
  it('renders the section heading', () => {
    const wrapper = mount(SectionContact)
    expect(wrapper.find('h2').text()).toContain("Let's make something memorable")
  })

  it('renders the section label', () => {
    const wrapper = mount(SectionContact)
    expect(wrapper.text()).toContain('06 — Get in Touch')
  })

  it('renders the email CTA button', () => {
    const wrapper = mount(SectionContact)
    const emailBtn = wrapper.find('.btn-primary')
    expect(emailBtn.exists()).toBe(true)
    expect(emailBtn.attributes('href')).toContain('mailto:')
  })

  it('renders the Instagram outline button', () => {
    const wrapper = mount(SectionContact)
    const igBtn = wrapper.find('.btn-outline')
    expect(igBtn.exists()).toBe(true)
    expect(igBtn.text()).toContain('@honify')
  })

  it('Instagram button opens in a new tab', () => {
    const wrapper = mount(SectionContact)
    const igBtn = wrapper.find('.btn-outline')
    expect(igBtn.attributes('target')).toBe('_blank')
    expect(igBtn.attributes('rel')).toContain('noopener')
  })

  it('renders both info cards', () => {
    const wrapper = mount(SectionContact)
    const cardHeadings = wrapper.findAll('.card h3').map((h) => h.text())
    expect(cardHeadings).toContain('Custom orders')
    expect(cardHeadings).toContain('Corporate gifting')
  })

  it('renders the response time note', () => {
    const wrapper = mount(SectionContact)
    expect(wrapper.find('.response-note').text()).toContain('24 hours')
  })

  it('has the correct section id', () => {
    const wrapper = mount(SectionContact)
    expect(wrapper.find('section').attributes('id')).toBe('contact')
  })
})
