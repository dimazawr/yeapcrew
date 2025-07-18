import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import IconBtn from '../IconBtn.vue'

describe('IconBtn.vue', () => {
  test('Component mounts correctly', () => {
    const wrapper = mount(IconBtn)
    const button = wrapper.get('.icon-btn')
    expect(button.classes('icon-btn')).toBe(true)
  })

  test('Renders icon in the slot correctly', () => {
    const wrapper = mount(IconBtn, {
      slots: {
        default: 'Text in slot',
      },
    })
    expect(wrapper.html()).toContain('Text in slot')
  })

  test('Emits click event when button is clicked', async () => {
    const wrapper = mount(IconBtn)
    const button = wrapper.get('.icon-btn')
    await button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
