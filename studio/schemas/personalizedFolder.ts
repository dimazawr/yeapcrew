import {defineField, defineType} from 'sanity'
import { UserIcon } from '@sanity/icons'

export default defineType({
  name: 'personalizedFolder',
  title: 'Personalized folder',
  description: 'Contains a text file with the description of the owner and content folders',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name this folder with a name of the person to whom it belongs. Folder will contain all kind of project folders and files.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (document) => document.title as string,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description, will be storted in "text file" within the folder',
      type: 'blockContent',
    }),
    defineField({
        name: 'folders',
        title: 'Content folders',
        description: 'Reference to the content folders owned by a person. You can create a new content folder if it does not exist yet.',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'contentFolder'}]}]
    }),
  ],
})
