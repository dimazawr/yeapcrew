<script setup lang="ts">
import { ref } from 'vue'
import DialogComponent from '../components/DialogComponent.vue'
import { type ContentFolder } from '@/api/queries'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data'
import VideoPlayer from '@/components/VideoPlayer.vue'
import IconBtn from '@/components/IconBtn.vue'
import FileIcon from '@/components/icons/FileIcon.vue'

const showModal = ref(true)
const showPlayerModal = ref(false)
const folder = ref<ContentFolder | null>(null)
const route = useRoute()
const router = useRouter()
const currentContent = ref<Record<string, string> | null>(null)

const handleDialogClose = () => {
  router.back()
}

const rootStore = useDataStore()

const updateFolder = () => {
  folder.value = rootStore.getContentFolderData(route.params.folderName as string)
}

rootStore.$subscribe((mutation) => {
  if (mutation.type === "direct") {
    updateFolder()
  }
})

updateFolder()
</script>

<template>
  <DialogComponent
    :showModal="showModal"
    :title="folder?.title ?? 'Loading...'"
    :actionOnClose="handleDialogClose"
  >
    <IconBtn
      v-for="contentItem in folder?.content"
      :key="contentItem._key"
      :onClick="
        () => {
          currentContent = contentItem
          showPlayerModal = true
        }
      "
    >
      <FileIcon />
      {{ contentItem.title }}
    </IconBtn>
  </DialogComponent>

  <DialogComponent
    :showModal="showPlayerModal"
    :title="currentContent?.title ?? 'Error'"
    type="player"
    :actionOnClose="
      () => {
        currentContent = null
        showPlayerModal = false
      }
    "
  >
    <VideoPlayer :href="currentContent.link" v-if="currentContent" />
  </DialogComponent>
</template>
