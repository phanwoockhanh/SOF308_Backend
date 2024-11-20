<template>
    <div id="app">
      <h1 style="color: green;">Nhập điểm của bạn:</h1><br>
      <input type="number"v-model="score"  placeholder="Nhập (ĐTB)" @input="DiemTB"/> <br>
      <p v-if="diemTB !== ''">Xếp loại: {{ diemTB }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        score: null, // Giá trị điểm trung bình nhập vào
        diemTB: '', // Lưu kết quả xếp loại
      };
    },
    methods: {
      DiemTB() {
        const score = parseFloat(this.score);
        if (isNaN(score) || score < 0 || score > 10) {
          this.diemTB = "Điểm không hợp lệ!";
        } else if (score < 5.0) {
          this.diemTB = "Yếu";
        } else if (score < 6.5) {
          this.diemTB = "Trung Bình";
        } else if (score < 8.0) {
          this.diemTB = "Khá";
        } else if (score < 9.0) {
          this.diemTB = "Giỏi";
        } else {
          this.diemTB = "Xuất Sắc";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  