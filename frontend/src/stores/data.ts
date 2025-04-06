import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MainScreenLinks, PersonalizedFolder } from '@/api/queries'

export const useDataStore = defineStore('data', () => {
  // store cached async data
  // create an object which would keep each folder to create stack of modals
  const data = ref<PersonalizedFolder[] | []>([])
  const linksData = ref<
    | MainScreenLinks
    | {
        _type: 'mainScreenLinks'
        links: []
      }
  >({
    _type: 'mainScreenLinks',
    links: [],
  })

  const setData = (newData: PersonalizedFolder[]) => {
    data.value = newData
  }

  const setLinks = (newLinks: MainScreenLinks) => {
    linksData.value = newLinks
  }

  const getPersonalizedFolderData = (slug: string) => {
    const folder = data.value.find((folder) => folder.slug.current === slug)
    if (folder) {
      return folder
    } else {
      return null
    }
  }

  const getContentFolderData = (parentFolderSlug: string, name: string) => {
    const parentFolderName = parentFolderSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const parentFolder = data.value.find(
      (folder) => folder.title === parentFolderName && folder._type === 'personalizedFolder',
    )
    if (parentFolder) {
      const contentFolder = parentFolder.folders.find((contentFolder) =>
        new RegExp(`^${name}$`, 'i').test(contentFolder.title),
      )
      return contentFolder ?? null
    } else {
      return null
    }
  }

  return { data, linksData, setData, setLinks, getPersonalizedFolderData, getContentFolderData }
})
