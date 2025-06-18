<template>
    <a :href="post.link" class="blog-post-card">
      <h3>{{ post.title }}</h3>
      <p v-if="post.description">{{ post.description }}</p>
      <span class="date">{{ formatDate(post.date) }}</span>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  })
  
  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  </script>
  
  <style scoped>
  .blog-post-card {
    display: block;
    padding: 1rem;
    border-radius: 8px;
    background: #f9f9f9;
    margin-bottom: 1rem;
    transition: all 0.2s ease;
    color: inherit;
    text-decoration: none;
  }
  
  .blog-post-card:hover {
    background: #eaeaea;
  }
  
  .date {
    font-size: 0.85rem;
    color: #666;
  }
  </style>