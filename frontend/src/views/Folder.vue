<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '../components/Dialog.vue'
import FolderBtnLink from '../components/FolderBtnLink.vue'
import { type PersonalizedFolder } from '@/api/queries'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data'

const showModal = ref(true)
const folder = ref<PersonalizedFolder | null>(null)
const route = useRoute()
const router = useRouter()

const { getPersonalizedFolderData } = useDataStore()

const handleFolderClose = () => {
  router.back()
}

folder.value = getPersonalizedFolderData(route.params.folder as string)
</script>

<template>
  <Teleport to="#dialogs">
    <Dialog
      :showModal="showModal"
      :title="folder?.title ?? 'Loading...'"
      :actionOnClose="handleFolderClose"
    >
      <FolderBtnLink
        v-for="folder in folder?.folders"
        :key="folder._id"
        :href="`${$route.path}/${folder.title.toLowerCase()}`"
      >
        {{ folder.title }}
      </FolderBtnLink>
    </Dialog>
  </Teleport>
</template>
