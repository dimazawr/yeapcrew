import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export default defineType({
  name: 'contentFolder',
  title: 'Content folder',
  description: 'Has inside links for a content and a text file with the desciption',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title will be used as part of the slug. For example, if the owner of the folder is Karikh, the final path to this folder will be /karikh/title',
      type: 'string',
    }),
    defineField({
      name: 'parentFolder',
      title: 'Parent Folder',
      type: 'reference',
      description: 'Reference to a parent folder',
      to: [{ type: 'personalizedFolder' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description, will be storted in "text file" within the folder',
      type: 'blockContent',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
     of: [{type: 'contentSource'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      parentFolder: 'parentFolder.title',
    },
    prepare(selection) {
      const { title, parentFolder } = selection
      return {
        title: title,
        subtitle: parentFolder,
      }
    }
  }
})
