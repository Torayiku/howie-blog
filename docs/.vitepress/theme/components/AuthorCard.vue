<template>
    <div class="author-card">
      <img :src="avatar" alt="Avatar" class="avatar" />
      <h4>Hi, I'm {{ name }}</h4>
      <p>{{ bio }}</p>
      <div class="social-links">
        <a href="https://github.com/yourname"  target="_blank">GitHub</a>
        |
        <a href="https://twitter.com/yourname"  target="_blank">Twitter</a>
      </div>
    </div>
  </template>
  
  <script setup>
  const name = 'Your Name'
  const bio = 'A passionate developer and writer. Loves open source, web development and UI/UX.'
  const avatar = '/avatar.jpg'
  </script>
  
  <style scoped>
  .author-card {
    max-width: 600px;
    margin: 2rem auto;
    text-align: center;
    padding: 1.5rem;
    background: #f5f5f5;
    border-radius: 10px;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .social-links a {
    margin: 0 0.5rem;
    color: #4680ea;
    text-decoration: none;
  }
  </style>