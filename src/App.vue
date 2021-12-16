<template>
  <nav-bar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Chris Towles' },
    { property: 'og:image', content: 'https://antfu.me/avatar.png' },
    { name: 'description', content: 'Chris Towles \'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@Chris_Towles' },
  ],
})
</script>