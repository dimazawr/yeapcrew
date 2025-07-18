import { mount, RouterLinkStub } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import FolderBtnLink from '../FolderBtnLink.vue'

describe('FolderBtnLink.vue', () => {
  test('FolderBtnLink component mounts correctly with the classname', () => {
    const wrapper = mount(FolderBtnLink, {
      props: {
        classname: 'folder-btn-link',
        href: '/test-folder',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    const buttonLink = wrapper.get('.folder-btn-link')
    expect(buttonLink.classes('folder-btn-link')).toBe(true)
  })

  test('FolderBtnLink component renders the correct href', () => {
    const wrapper = mount(FolderBtnLink, {
      props: {
        classname: 'folder-btn-link',
        href: '/test-folder',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/test-folder')
  })

  test('FolderBtnLink emits click event when clicked', async () => {
    const wrapper = mount(FolderBtnLink, {
      props: {
        classname: 'folder-btn-link',
        href: '/test-folder',
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    const buttonLink = wrapper.get('.folder-btn-link')
    await buttonLink.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
