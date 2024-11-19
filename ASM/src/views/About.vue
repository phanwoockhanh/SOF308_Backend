<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold" href="/home">
            <img src="@/assets/images/Logo.png" alt="Logo" class="rounded-circle me-2" style="height: 40px;">
            BLOG - 60
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/post1">Bài Viết</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/about">Giới Thiệu</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
            </ul>
            <!-- Social Media Links -->
            <div class="social-links d-flex ms-4">
              <a href="https://facebook.com/phanquockhanh01" target="_blank" class="me-3">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/phanquockhanh01" target="_blank" class="me-3">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@phanquockhanh01" target="_blank">
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <header class="py-5 hero-section d-flex align-items-center text-center text-black">
        <div class="container">
          <div class="hero-overlay rounded"></div>
          <h1 class="display-4 fw-bold">Giới Thiệu Về Tôi</h1>
          <p class="lead">Tôi là BLOG 60, một người rất đam mê công nghệ và sáng tạo.</p>
        </div>
      </header>
  
      <!-- About Section -->
      <section class="about-section py-5 ">
        <div class="container">
          <h2 class="text-center mb-4">Về Tôi</h2>
          <div class="row">
            <div class="col-md-6">
              <img src="@/assets/images/avatar.png" class="img-fluid rounded-circle mb-4" alt="About Me">
            </div>
            <div class="col-md-6">
              <p>
                Tôi là Blog60. Tôi có niềm đam mê mạnh mẽ trong việc phát triển các sản phẩm sáng tạo và giải quyết các vấn đề thực tế.
              </p>
              <p>
                Ngoài công việc, tôi cũng yêu thích vận động và tham gia vào các dự án cộng đồng. Mục tiêu của tôi là không ngừng học hỏi và phát triển để mang lại giá trị cho cộng đồng.
              </p>
              <p>
                Nếu bạn muốn liên hệ với tôi, đừng ngần ngại gửi tin nhắn qua các kênh liên lạc ở dưới.
              </p>
              <!-- Social Media Links -->
              <div class="social-links mt-3">
                <a href="https://facebook.com/phanquockhanh01" target="_blank" class="me-3">
                  <i class="bi bi-facebook fs-4"></i>
                </a>
                <a href="https://instagram.com/phanquockhanh01" target="_blank" class="me-3">
                  <i class="bi bi-instagram fs-4"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" class="me-3">
                  <i class="bi bi-youtube fs-4"></i>
                </a>
                <a href="https://www.tiktok.com/@phanquockhanh01" target="_blank">
                  <i class="bi bi-tiktok fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <!-- Footer -->
      <footer id="contact" class="py-4 bg-dark text-white text-center">
        <p>&copy; 2024 Blog 60 </p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .hero-section {
    background-color: #f0f0f0;
    position: relative;
    text-align: center;
    padding: 80px 0;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
  }
  
  .about-section {
    background-color: #fff;
    padding: 50px 0;
  }
  
  .about-section h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .about-section img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
  
  footer {
    background-color: #333;
  }
  
  </style>
  