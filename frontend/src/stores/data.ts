import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ContentFolder, MainScreenLinks, PersonalizedFolder } from '@/api/queries'

export const useDataStore = defineStore('data', () => {
  // store cached async data
  // create an object which would keep each folder to create stack of modals
  const data = ref<PersonalizedFolder | undefined>(undefined)
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
    // assume that the first element is the root folder
    const [rootFolder] = newData
    if (rootFolder.folders) {
      rootFolder.folders = rootFolder.folders.filter((subfolder) => Boolean(subfolder.content))
    }
    data.value = rootFolder
  }

  const setLinks = (newLinks: MainScreenLinks) => {
    linksData.value = newLinks
  }

  const getContentFolderData = (name: string) => {
    if (data.value) {
      const contentFolder = data.value.folders.find((folder: ContentFolder) =>
        new RegExp(`^${name}$`, 'i').test(folder.title),
      )
      return contentFolder ?? null
    } else {
      return null
    }
  }

  return { data, linksData, setData, setLinks, getContentFolderData }
})
