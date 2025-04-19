<script setup lang="ts">
import { useDraggable, useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { useRoute } from 'vue-router'

const { showModal, title, actionOnClose, isDraggableDisabled } = defineProps<{
  showModal: boolean
  title: string
  type?: 'player' | 'folder' | 'description'
  actionOnClose?: () => void
  isDraggableDisabled?: boolean
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const isDesktop = breakpoints.greater('lg')

const dialogRef = useTemplateRef('dialog')

const route = useRoute()

const siblingOffset = route.fullPath.split('/').length

const offsetY = siblingOffset * 40

const { style } = useDraggable(dialogRef, {
  initialValue: { x: innerWidth / (4.2 + siblingOffset), y: offsetY },
  preventDefault: true,
  disabled: Boolean(isDraggableDisabled),
})

const handleDialogClose = () => {
  if (typeof actionOnClose === 'function') {
    actionOnClose()
  }
  dialogRef.value?.close()
}
</script>

<template>
  <dialog
    class="window"
    ref="dialog"
    :id="title"
    :open="showModal"
    :style="isDesktop && style"
    style="position: fixed"
    @click.prevent
  >
    <div class="title-bar">
      <button aria-label="Close" class="close" @click="handleDialogClose"></button>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="window-pane">
      <article class="grid" v-if="type === 'folder'">
        <slot />
      </article>
      <div v-else-if="type === 'player'" class="container">
        <slot />
      </div>
      <slot v-else />
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  max-width: 100vw;
  z-index: 1;
  width: 40rem;
  height: 30rem;
  padding: 0;
  margin: 0;
}
dialog[open] {
  animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
article {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: 8px;
}
.container {
  height: 42vh;
  width: 100%;
}

@keyframes zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* system.css rewrite */

.window {
  min-width: 280px;
}

@media (max-width: 382px) {
  .title-bar {
    padding: 0;
    height: 8vh;
    line-height: 1;
  }
}
.title-bar {
  height: initial;
  padding: 0;
}

.title-bar .title {
  font-size: 1rem;
}

@media (min-width: 640px) {
  .title-bar .title {
    font-size: 1.5rem;
    line-height: 1.1;
  }
}

.window-pane > :last-child {
  margin-bottom: 3rem;
}
</style>
