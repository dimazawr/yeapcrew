import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import ErrorDialog from '../ErrorDialog.vue'

describe('ErrorDialog.vue', () => {
  test('ErrorDialog component mounts correctly', () => {
    const wrapper = mount(ErrorDialog, {
      slots: {
        default: 'An error occurred',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('Displays the correct error message', () => {
    const errorMessage = 'An error occurred'
    const wrapper = mount(ErrorDialog, {
      slots: {
        default: errorMessage,
      },
    })
    expect(wrapper.text()).toContain(errorMessage)
  })

  test('Emits close event when close button is clicked', async () => {
    const wrapper = mount(ErrorDialog, {
      slots: {
        default: 'An error occurred',
      },
    })
    await wrapper.find('.btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
