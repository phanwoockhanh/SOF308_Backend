<template>
    <div>
      <h1>Quản lý bài viết</h1>
      <CreatePost @add-post="addPost" /> <br />
      <PostList :posts="posts" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CreatePost from './CreatePost.vue';
  import PostList from './PostList.vue';
  
  const posts = ref([]);
  
  const addPost = (newPost) => {
    posts.value.push(newPost);
  };
  </script>
  