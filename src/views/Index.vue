<script setup lang="ts">
  import YouTube from '../components/YouTube.vue';
  
  const videos = [
    "UVQefAy6u_0",
    "tL3XXHXnn20"
  ];
  
</script>

<template>
  <div class="container mx-auto">
    <div v-for:="video in videos" class="mb-10">
      <YouTube :code="video"></YouTube>
    </div>
  </div>
</template>
