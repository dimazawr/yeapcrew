<script setup lang="ts">
import { ref } from 'vue'
import DialogComponent from '../components/DialogComponent.vue'
import FolderBtnLink from '../components/FolderBtnLink.vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRouter, RouterView } from 'vue-router'
import { PortableText } from '@portabletext/vue'
import FileIcon from '@/components/icons/FileIcon.vue'
import IconBtn from '@/components/IconBtn.vue'

const showModal = ref(true)
const showDescription = ref(false)
const store = useDataStore()
const { data: rootFolder } = storeToRefs(store)
const router = useRouter()

const handleOpenDescription = () => {
  showDescription.value = true
}
const handleCloseDescription = () => {
  showDescription.value = false
}

import { useHead } from '@unhead/vue'

useHead({
  title: '!!!OPENME!!!',
})
</script>

<template>
  <DialogComponent
    :showModal="showModal"
    title="!!!OPENME!!!"
    :actionOnClose="() => router.back()"
    type="folder"
  >
    <FolderBtnLink
      v-for="folder in rootFolder?.folders"
      :key="folder?.title"
      :href="{ name: 'subfolder', params: { folderName: folder.title.toLowerCase() } }"
    >
      {{ folder.title }}
    </FolderBtnLink>
    <IconBtn v-if="rootFolder?.description" :onClick="handleOpenDescription">
      <FileIcon />
      README.txt
    </IconBtn>
  </DialogComponent>
  <RouterView />
  <DialogComponent
    :showModal="showDescription"
    title="README"
    :actionOnClose="handleCloseDescription"
    type="description"
  >
    <PortableText v-if="rootFolder?.description" :value="rootFolder?.description" />
  </DialogComponent>
</template>
