<template>
    <div class="login-container">
      <!-- Instagram Logo -->
      <div class="text-center mb-4">
        <img src="@/assets/images/Logo.png" alt="LOGO 60" class="instagram-logo" style="width: 50px; height: 50px;">
      </div>
  
      <form @submit.prevent="handleLogin">
        <!-- Email Field -->
        <div class="mb-3">
          <input type="email" v-model="email" class="form-control" id="email" name="email" placeholder="Số điện thoại, tên người dùng hoặc email" required />
        </div>
  
        <!-- Password Field -->
        <div class="mb-3">
          <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="Mật khẩu" required />
        </div>
  
        <!-- Login Button -->
        <div class="mb-3">
          <button type="submit" class="btn btn-instagram w-100">Đăng Nhập</button>
        </div>
      </form>
  
      <!-- Forgot Password -->
      <div class="text-center mb-4">
        <a href="#">Quên mật khẩu?</a>
      </div>
  
      <!-- Divider -->
      <div class="text-center mb-3">
        <hr />
        <span class="text-muted">Hoặc</span>
      </div>
  
      <!-- Sign Up Link -->
      <div class="text-center">
        <p>Chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
      </div>
  
      <!-- Social Links -->
      <div class="text-center social-links mt-3">
        <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
        <a href="#" target="_blank"><i class="bi bi-google"></i></a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // Xử lý đăng nhập, bạn có thể gửi yêu cầu đến API ở đây
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #fafafa;
  }
  
  .login-container {
    max-width: 350px;
    margin: 50px auto;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .btn-instagram {
    background-color: #3897f0;
    color: white;
  }
  
  .btn-instagram:hover {
    background-color: #3178d7;
  }
  
  .instagram-logo {
    width: 200px;
  }
  
  .social-links i {
    font-size: 1.5rem;
    margin: 0 10px;
    color: #3897f0;
  }
  </style>
  