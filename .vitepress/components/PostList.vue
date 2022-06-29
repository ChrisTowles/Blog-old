<script setup lang="ts">
import { posts } from '../posts'
</script>

<template>
  <div justify-center>
    <div v-for="p of posts" :key="p.title">
    <div>
    <a  :href="`${p.link}`" m-0 rel="noopener noreferrer" :aria-label="p.title">
    {{ p.title }}
    </a> 
    <p></p>
    </div>
    </div>
  </div>
</template>
