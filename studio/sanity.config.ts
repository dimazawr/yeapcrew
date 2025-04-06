import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
//import {presentationTool} from 'sanity/presentation'
import {structure} from './structure'

import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'yeap-crew-sanity-studio',
  title: 'Yeap Crew',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure
    }),
/*     presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }), */
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
