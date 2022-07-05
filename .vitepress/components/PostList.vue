<script setup lang="ts">
import { posts } from '../posts'
</script>

<template>
  <div v-for="p of posts" :key="p.title">

    <article p="l-4 r-4" >

      <h2>
        <a :href="p.link" rel="noopener noreferrer" :aria-label="p.title">
          {{ p.title }}</a>
      </h2>
      <p p="l-4" class="details">
        <ClientOnly>
          <div v-html="p.content"></div>
          <a :href="p.link"><i>continue.... </i></a>
        </ClientOnly>
      </p>
    </article>


  </div>


</template>
