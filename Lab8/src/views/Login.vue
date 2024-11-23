<template>
    <div>
      <h1>Đăng nhập</h1>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input v-model="email" type="email" required />
        <label>Mật khẩu:</label>
        <input v-model="password" type="password" required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../auth';
  
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        // Xác thực đơn giản
        if (this.email && this.password) {
          auth.login(); // Đăng nhập thành công
          alert("Đăng nhập thành công!");
          this.$router.push("/dashboard"); // Chuyển hướng
        } else {
          alert("Vui lòng nhập đầy đủ thông tin!");
        }
      },
    },
  };
  </script>
  
  <style scoped>
/* Tổng thể */
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: -100vh; /* Căn giữa theo chiều dọc */
  background: #f3f4f6; /* Màu nền nhẹ */
  font-family: Arial, sans-serif;
  margin-top: auto;
}

/* Tiêu đề */
h1 {
  font-size: 2rem;
  color: #0056b3; /* Màu xanh nổi bật */
  margin-bottom: 20px;
  text-align: center;
}

/* Form */
form {
  width: 100%;
  max-width: 400px; /* Giới hạn chiều rộng */
  background: #ffffff; /* Nền trắng */
  padding: 20px;
  border-radius: 8px; /* Bo góc */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Khoảng cách giữa các phần tử */
}

/* Label */
label {
  font-size: 1rem;
  color: #333;
}

/* Input */
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc; /* Viền nhẹ */
  border-radius: 5px; /* Bo góc */
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

/* Input khi focus */
input:focus {
  outline: none;
  border-color: #0056b3; /* Đổi màu viền khi focus */
}

/* Button */
button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: #0056b3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Button hover */
button:hover {
  background: #004095;
}

/* Form hover (hiệu ứng tổng thể) */
form:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Đổ bóng đậm hơn */
}

/* Căn chỉnh text alert hoặc thông tin */
.alert {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: center;
}
</style>
