import { LinkIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default {
    name: 'mainScreenLinks',
    title: 'Main Screen Links',
    type: 'document',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Main screen links',
        }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        description: 'Title of the link',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                        description: 'URL of the link',
                        validation: (Rule) => Rule.required().uri({
                            scheme: ['http', 'https', 'mailto', 'tel']
                        }),
                    }),
                    defineField({
                        name: 'icon',
                        title: 'Icon',
                        type: 'image',
                        description: 'Icon of the link',
                        validation: (Rule) => Rule.required(),
                    }),
                ]
            }],
            description: 'Links to be displayed on the main screen',
        }),
    ]
}