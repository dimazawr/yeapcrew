<script setup lang="ts">
import { RouterView } from 'vue-router'
import FolderBtnLink from './components/FolderBtnLink.vue'

import { ref, watchEffect } from 'vue'
import { getMainLinks, getPersonolizedFolders, type MainScreenLinks } from '@/api/queries'
import { useDataStore } from '@/stores/data'

const { setData } = useDataStore()

const linksData = ref<MainScreenLinks>({
  _type: 'mainScreenLinks',
  links: [],
})
const loading = ref(false)
const error = ref<string | null>(null)

async function fetchData() {
  error.value = null
  loading.value = true

  try {
    const data = await getPersonolizedFolders()
    setData(data)
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  } finally {
    loading.value = false
  }
}

watchEffect(async function fetchLinks() {
  try {
    const data = await getMainLinks()
    linksData.value = data
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  }
})

fetchData()
</script>

<template>
  <main class="main">
    <section>
      <FolderBtnLink href="/root" classname="folder--main"> !!!OPENME!!! </FolderBtnLink>
      <RouterView />
    </section>
  </main>
  <footer>
    <ul v-if="linksData" class="links">
      <li v-for="link in linksData.links" :key="link.title">
        <a :href="link.url" target="_blank" class="icon-links"
          ><img :src="link.iconUrl" :alt="link.title" width="40" height="40" />
        </a>
      </li>
    </ul>
  </footer>
  <div id="dialogs"></div>
</template>

<style scoped>
section {
  display: grid;
  min-height: 80vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

footer {
  display: flex;
  max-height: 250px;
  place-items: center;
  justify-content: center;
}

.links {
  --s: 64px; /* control the size */
  display: grid;
  grid: auto-flow var(--s) / repeat(2, var(--s));
  place-items: center;
  margin: calc(var(--s) / 2);
  transform: rotate(45deg);
}

.links li {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  cursor: pointer;
  transform: rotate(-45deg);
}

.icon-links {
  background-color: #fff;
  padding: 0;
}
</style>
