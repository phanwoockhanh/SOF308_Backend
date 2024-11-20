<template>
  <div id="app">
    <!-- Thanh điều hướng nằm ngang -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/bai1">Bài 1</router-link></li>
        <li><router-link to="/bai2">Bài 2</router-link></li>
        <li><router-link to="/bai3">Bài 3</router-link></li>
        <li><router-link to="/posts">Quản lý bài viết</router-link></li>
      </ul>
    </nav>

    <!-- Nội dung hiển thị bên dưới -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


