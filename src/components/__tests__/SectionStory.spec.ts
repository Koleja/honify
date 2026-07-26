import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionStory from '../SectionStory.vue'

describe('SectionStory', () => {
  it('renders the section label', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.text()).toContain('02 — Our Story')
  })

  it('renders the pull quote', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.find('.pull-quote').text()).toContain('Honify began in a beehive')
  })

  it('renders the story body text', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.text()).toContain('Michał spent years as a beekeeper')
  })

  it('renders the closing statement', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.find('.closing').text()).toContain('In a world full of overly sweet confections')
  })

  it('renders the honey pour background image div', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.find('.img').exists()).toBe(true)
  })

  it('has the correct section id', () => {
    const wrapper = mount(SectionStory)
    expect(wrapper.find('section').attributes('id')).toBe('story')
  })
})
