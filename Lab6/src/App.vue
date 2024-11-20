<template>
  <div id="app">
    <!-- Thanh điều hướng nằm ngang -->
    <div class="container">
        <li><router-link to="/bai1">Bài 1</router-link></li>
        <li><router-link to="/bai2">Bài 2</router-link></li>
        <li><router-link to="/bai3">Bài 3</router-link></li>
        <li><router-link to="/bai4">Bài 4</router-link></li>
     </div>
  
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


