<script setup lang="ts">
import { ref } from 'vue'
import DialogComponent from '../components/DialogComponent.vue'
import FolderBtnLink from '../components/FolderBtnLink.vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const showModal = ref(true)
const store = useDataStore()
const { data: folders } = storeToRefs(store)
const router = useRouter()
</script>

<template>
  <DialogComponent
    :showModal="showModal"
    title="!!!OPENME!!!"
    :actionOnClose="() => router.back()"
    :isDraggableDisabled="true"
  >
    <FolderBtnLink
      v-for="folder in folders"
      :key="folder.slug.current"
      :href="`${$route.path}/${folder.slug.current}`"
    >
      {{ folder.title }}
    </FolderBtnLink>
  </DialogComponent>
</template>
