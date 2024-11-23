<template>
  <div>
    <h1>Bảng điều khiển</h1>
    <p>Chào mừng đến trang quản lý dành cho người dùng đã đăng nhập.</p>
    <button @click="logout">Đăng xuất</button>
  </div>
</template>

<script>
import { auth } from '../auth';

export default {
  name: "Dashboard",
  methods: {
    logout() {
      auth.logout(); // Đăng xuất
      alert("Bạn đã đăng xuất!");
      this.$router.push("/login"); // Quay lại trang đăng nhập
    },
  },
};
</script>
