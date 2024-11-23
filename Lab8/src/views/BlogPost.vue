<template>
    <div>
      <h1>Chi tiết bài viết</h1>
      <p>ID bài viết: {{ $route.params.id }}</p>
      <p>Nội dung bài viết sẽ được thêm sau.</p>
      <router-link to="/blog">Quay lại danh sách bài viết</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogPost",
  };
  </script>
  