<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../components/Dialog.vue'
import { type ContentFolder } from '@/api/queries'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data'
import FileIconBtn from '@/components/FileIconBtn.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const showModal = ref(true)
const showPlayerModal = ref(false)
const folder = ref<ContentFolder | null>(null)
const route = useRoute()
const router = useRouter()
const currentContent = ref<Record<string, string> | null>(null)

const handleDialogClose = () => {
  router.back()
}

const { getContentFolderData } = useDataStore()

folder.value = getContentFolderData(route.params.folder as string, route.params.subfolder as string)
</script>

<template>
  <Teleport to="#dialogs">
    <Dialog
      :showModal="showModal"
      :title="folder?.title ?? 'Loading...'"
      :actionOnClose="handleDialogClose"
    >
      <FileIconBtn
        v-for="contentItem in folder?.content"
        :key="contentItem._key"
        :onClick="
          () => {
            currentContent = contentItem
            showPlayerModal = true
          }
        "
      >
        {{ contentItem.title }}
      </FileIconBtn>
    </Dialog>

    <Dialog
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
    </Dialog>
  </Teleport>
</template>
