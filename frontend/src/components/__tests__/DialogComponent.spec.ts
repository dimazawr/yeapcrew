import { mount } from '@vue/test-utils'
import { test, expect, describe, vi, beforeAll } from 'vitest'
import DialogComponent from '../DialogComponent.vue'
import { useRoute } from 'vue-router'

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn()
  HTMLDialogElement.prototype.showModal = vi.fn()
  HTMLDialogElement.prototype.close = vi.fn()
})

vi.mock('vue-router', () => ({ useRoute: vi.fn() }))

vi.mocked(useRoute).mockReturnValue({
  fullPath: '/test/path',
  matched: [],
  name: 'TestRoute',
  params: {},
  query: {},
  hash: '',
  path: '/test/path',
  meta: {},
  redirectedFrom: undefined,
})

describe('DialogComponent.vue', () => {
  const dialogContent = 'Dialog content'
  const wrapper = mount(DialogComponent, {
    slots: {
      default: dialogContent,
    },
    props: {
      showModal: true,
      title: 'Dialog Title',
    },
  })

  test('DialogComponent mounts correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('Displays the correct dialog content', () => {
    expect(wrapper.text()).toContain(dialogContent)
  })

  test('Emits close event when close button is clicked', async () => {
    await wrapper.find('.close').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})
