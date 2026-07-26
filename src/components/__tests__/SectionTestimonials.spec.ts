import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionTestimonials from '../SectionTestimonials.vue'

describe('SectionTestimonials', () => {
  it('renders the section heading', () => {
    const wrapper = mount(SectionTestimonials)
    expect(wrapper.find('h2').text()).toBe('Words from the table')
  })

  it('renders the section label', () => {
    const wrapper = mount(SectionTestimonials)
    expect(wrapper.text()).toContain('05 — What People Say')
  })

  it('renders exactly 3 testimonial cards', () => {
    const wrapper = mount(SectionTestimonials)
    expect(wrapper.findAll('.quote')).toHaveLength(3)
  })

  it('each testimonial has a star rating', () => {
    const wrapper = mount(SectionTestimonials)
    wrapper.findAll('.stars').forEach((stars) => {
      expect(stars.text()).toContain('★')
    })
  })

  it('renders all three quotes', () => {
    const wrapper = mount(SectionTestimonials)
    const quotes = wrapper.findAll('blockquote').map((q) => q.text())
    expect(quotes.some((q) => q.includes("I've never tasted anything quite like it"))).toBe(true)
    expect(quotes.some((q) => q.includes('corporate gifts'))).toBe(true)
    expect(quotes.some((q) => q.includes("Michał's story"))).toBe(true)
  })

  it('renders all three author attributions', () => {
    const wrapper = mount(SectionTestimonials)
    const captions = wrapper.findAll('figcaption').map((f) => f.text())
    expect(captions).toContain('Anna K. — Warsaw')
    expect(captions).toContain('Piotr M. — CEO')
    expect(captions).toContain('Marta W. — Prague')
  })

  it('has the correct section id', () => {
    const wrapper = mount(SectionTestimonials)
    expect(wrapper.find('section').attributes('id')).toBe('testimonials')
  })
})
