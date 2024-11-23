<template>
  <div id="app">
    <!-- Thanh điều hướng nằm ngang -->
    <nav>
      <ul>
        <li><router-link class="nav-link" to="/">Trang chủ</router-link></li>
        <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
        <li><router-link class="nav-link" to="/profile">Thông tin người dùng</router-link></li>
        <li><router-link class="nav-link" to="/dashboard">Dashboard</router-link></li>
      </ul>
    </nav> <br>

    <!-- Khu vực nội dung hiển thị -->
    <br><main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Thanh điều hướng */
nav {
  background-color: #f8f9fa;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Danh sách điều hướng ngang */
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex; /* Đặt các mục nằm ngang */
  justify-content: space-around; /* Căn đều các mục */
  align-items: center; /* Căn giữa theo chiều dọc */
}

/* Các mục trong danh sách */
nav ul li {
  display: inline-block; /* Đảm bảo mỗi mục hiển thị riêng biệt */
  margin: 0 10px; /* Khoảng cách giữa các mục */
}

/* Định dạng liên kết */
.nav-link {
  text-decoration: none;
  color: #007bff;
  font-size: 16px; /* Điều chỉnh kích thước chữ */
}

.nav-link.router-link-active {
  font-weight: bold;
  color: #0056b3;
}

.nav-link:hover {
  background-color: #003f7d; /* Đổi màu nền khi hover */
  color: white;
  padding: 5px 10px; /* Thêm đệm cho liên kết khi hover */
  border-radius: 5px; /* Bo tròn nhẹ liên kết */
}
/* Nội dung chính */
.content {
  display: flex; /* Sử dụng flexbox để căn chỉnh */
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
  margin-top: -250px; /* Khoảng cách với thanh điều hướng */
  padding: 30px; /* Thêm khoảng cách nội dung với viền */
  background-color: #f9f9f9; /* Nền nhẹ nhàng */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  border-radius: 8px; /* Bo góc nội dung */
  box-sizing: border-box; /* Bao gồm padding trong kích thước */
  width: 100%; /* Đảm bảo nội dung không bị lệch */
  max-width: -10px; /* Giới hạn chiều rộng của nội dung */
   /* Căn giữa ngang */
  margin-right: 1000px; /* Căn giữa ngang */
}


h1,
p {
  text-align: center; /* Căn giữa văn bản */
  color: #333; /* Màu chữ nhẹ nhàng */
}

</style>
