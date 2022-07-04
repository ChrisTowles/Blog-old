<script setup lang="ts">
import { posts } from '../posts'
</script>

<template>
  <div v-for="p of posts" :key="p.title">

    <article>

      <h2>
        <a :href="`${p.link}`" rel="noopener noreferrer" :aria-label="p.title">
          {{ p.title }}</a>
      </h2>
      <p p="l-4" class="details">
        {{p.content}}
      </p>
    </article>


  </div>


</template>
