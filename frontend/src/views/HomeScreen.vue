<script setup lang="ts">
import FolderBtnLink from '@/components/FolderBtnLink.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Main',
  meta: [
    {
      name: 'description',
      content: `
We’re Yeap Crew — a VFX/editorial boutique born from loud ideas, late nights, and melting minds.
We’re not here to play it safe. We’re here to blow the doors off.
Award-winning? Yeap.
Obsessed with our craft? Yeap.
Allergic to boring sh*t? Hell yeap.
We only roll with projects that punch hard, stand out, and say something. If it’s bland, corporate, or chasing trends — not interested. We’re into the bold, the strange, the too-weird kind of work.
We’re a crew of artists, rebels, and punks who believe VFX should hit like a molotov cocktail of pixels. This isn’t a job. It’s a mission.
So if you're ready to go off-script, make some noise, and bring a vision to life that actually feels something —
Yeap.
We're in.`,
    },
  ],
})
</script>

<template>
  <FolderBtnLink href="root" classname="folder--main"> !!!OPENME!!! </FolderBtnLink>
  <RouterView />
</template>
