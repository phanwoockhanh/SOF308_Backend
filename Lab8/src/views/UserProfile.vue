<template>
    <div>
      <h1>Thông tin người dùng</h1>
      <router-link to="/profile/info">Thông tin cơ bản</router-link> |
      <router-link to="/profile/settings">Cài đặt</router-link>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: "UserProfile",
  };
  </script>
  