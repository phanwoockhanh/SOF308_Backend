<template>
    <div class="register-container">
      <!-- Instagram Logo -->
      <div class="text-center mb-4">
        <img src="@/assets/images/Logo.png" alt="Logo 60" class="instagram-logo" style="width: 50px; height: 50px;">
      </div>
  
      <!-- Register Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Full Name -->
        <div class="mb-3">
          <input type="text" class="form-control" v-model="fullname" placeholder="Họ và Tên" required />
        </div>
        <!-- Email Field -->
        <div class="mb-3">
          <input type="email" class="form-control" v-model="email" placeholder="Số điện thoại, tên người dùng hoặc email" required />
        </div>
        <!-- Password Field -->
        <div class="mb-3">
          <input type="password" class="form-control" v-model="password" placeholder="Mật khẩu" required />
        </div>
        <!-- Confirm Password -->
        <div class="mb-3">
          <input type="password" class="form-control" v-model="confirmPassword" placeholder="Xác nhận mật khẩu" required />
        </div>
        <!-- Register Button -->
        <div class="mb-3">
          <button type="submit" class="btn btn-instagram w-100">Đăng Ký</button>
        </div>
      </form>
  
      <!-- Sign In Link -->
      <div class="text-center">
        <p>Đã có tài khoản? <router-link to="/login">Đăng nhập ngay</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        if (this.password !== this.confirmPassword) {
          alert("Mật khẩu và xác nhận mật khẩu không khớp.");
          return;
        }
  
        // Logic to handle the registration (e.g., call an API)
        const userData = {
          fullname: this.fullname,
          email: this.email,
          password: this.password
        };
  
        console.log("Đăng ký với thông tin: ", userData);
        
        // Redirect to login page after successful registration
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    background-color: #fafafa;
  }
  
  .register-container {
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
  </style>
  