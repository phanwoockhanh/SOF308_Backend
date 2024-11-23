// Trạng thái xác thực giả lập
let isAuthenticated = false;

export const auth = {
  login() {
    isAuthenticated = true;
  },
  logout() {
    isAuthenticated = false;
  },
  isAuthenticated() {
    return isAuthenticated;
  },
};
