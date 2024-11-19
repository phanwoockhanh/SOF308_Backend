<template>
  <div id="app">
    <!-- Thanh điều hướng chung nếu cần -->
    <navbar></navbar> <!-- hoặc một component điều hướng chung cho toàn bộ ứng dụng -->
    
    <!-- Đối với các trang có route, Vue Router sẽ hiển thị ở đây -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* CSS toàn cục */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

nav {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  text-decoration: none;
  color: #007bff;
}

nav ul li a.router-link-active {
  font-weight: bold;
  color: #0056b3;
}
</style>
