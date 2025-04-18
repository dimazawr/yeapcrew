<script setup lang="ts">
import { ref } from 'vue'
import DialogComponent from '../components/DialogComponent.vue'
import FolderBtnLink from '../components/FolderBtnLink.vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRouter, RouterView } from 'vue-router'

const showModal = ref(true)
const store = useDataStore()
const { data: rootFolder } = storeToRefs(store)
const router = useRouter()
</script>

<template>
  <DialogComponent :showModal="showModal" title="!!!OPENME!!!" :actionOnClose="() => router.back()">
    <FolderBtnLink
      v-for="folder in rootFolder?.folders"
      :key="folder?.title"
      :href="{ name: 'subfolder', params: { folderName: folder.title.toLowerCase() } }"
    >
      {{ folder.title }}
    </FolderBtnLink>
  </DialogComponent>
  <RouterView />
</template>
