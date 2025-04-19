<script lang="ts" setup>
const { actionOnClose } = defineProps<{
  actionOnClose?: () => void
}>()
</script>
<template>
  <div class="standard-dialog scale-down">
    <div class="dialog-text">
      <slot />
    </div>
    <div>
      <button class="btn" @click="actionOnClose">Close</button>
    </div>
  </div>
</template>

<style scoped>
.standard-dialog {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 280px;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 1000;
}
.dialog-text {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>
