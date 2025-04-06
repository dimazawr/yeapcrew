import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contentSource',
  title: 'Content source',
  description: 'Content source - title, link, description',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
})
