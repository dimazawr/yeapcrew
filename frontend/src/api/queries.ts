import { client } from '../../sanity.config'
import type { Slug } from '@sanity/types'
import { useMemoize } from '@vueuse/core'

export interface ContentSource {
  _type: 'contentSource'
  _key: string
  title: string
  link: string
}

export interface ContentFolder {
  _type: 'contentFolder'
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
  title: string
  parentFolder: {
    _type: 'reference'
    _ref: string
  }
  content: ContentSource[]
}

export interface PersonalizedFolder {
  _type: 'personalizedFolder'
  _createdAt: string
  _id: string
  title: string
  slug: Slug
  excerpt?: string
  folders: ContentFolder[]
}

export type TreeStructure = PersonalizedFolder[]

export interface MainScreenLinks {
  _type: 'mainScreenLinks'
  links: {
    title: string
    url: string
    iconUrl: string
  }[]
}

export const getPersonolizedFolders = useMemoize(async (): Promise<PersonalizedFolder[]> => {
  try {
    const folders = await client.fetch(
      '*[_type == "personalizedFolder" && title == "Yura Karikh"]{title, slug, _id, _type, description, folders[]->{title, parentFolder, slug, _id, _type, content}}',
    )
    return folders
  } catch (error) {
    console.error(error)
  }
  return []
})

export const getMainLinks = useMemoize(async (): Promise<MainScreenLinks> => {
  try {
    const [links] = await client.fetch(
      '*[_type == "mainScreenLinks"]{links[]{title, url, "iconUrl": icon.asset->url}}',
    )
    return links
  } catch (error) {
    console.error(error)
  }
  return {
    _type: 'mainScreenLinks',
    links: [],
  }
})
