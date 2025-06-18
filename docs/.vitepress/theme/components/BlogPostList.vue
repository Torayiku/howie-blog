<template>
    <div class="blog-posts">
      <h2>Recent Posts</h2>
      <div class="post-list">
        <BlogPostCard v-for="post in posts" :key="post.link" :post="post" />
      </div>
    </div>
  </template>
  
  <script setup>
  import BlogPostCard from './BlogPostCard.vue'
  
  const posts = [
    {
      title: 'Hello World',
      description: 'This is the first post on my blog.',
      link: '/posts/hello-world',
      date: '2025-04-01'
    },
    {
      title: 'Another Post',
      description: 'An example of how to write great content.',
      link: '/posts/another-post',
      date: '2025-04-05'
    }
  ]
  </script>
  
  <style scoped>
  .blog-posts {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>