import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
//import {presentationTool} from 'sanity/presentation'
import {structure} from './structure'

import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const testData = process.env.SANITY_STUDIO_TEST_DATASET!
const productionData = process.env.SANITY_STUDIO_PRODUCTION_DATASET!

const baseConfig = {
  studioHost: 'yeapcrew',
  projectId,
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
}

export default defineConfig([{
  ...baseConfig,
  name: 'yeap-crew-sanity-studio-test',
  title: "Test site content",
  dataset: testData,
  basePath: "/test"
}, {
  ...baseConfig,
  name: 'yeap-crew-sanity-studio-production',
  title: "Production site content",
  dataset: productionData,
  basePath: "/prod"
}])
