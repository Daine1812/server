// Khởi tạo Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDKefx3IJAJ4BA9po2xRTo45gSeqEQEXg",
    authDomain: "save-1fccd.firebaseapp.com",
    projectId: "save-1fccd",
    storageBucket: "save-1fccd.appspot.com",
    messagingSenderId: "16629600307",
    appId: "1:16629600307:web:00ca5a37bc6dfaf278d346",
    measurementId: "G-XBMQBY4N09"
  };
  
  // Khởi tạo ứng dụng Firebase và auth
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Hàm đăng ký người dùng
  function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        document.getElementById("message").innerText = "Đăng ký thành công!";
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      })
      .catch((error) => {
        document.getElementById("message").innerText = error.message;
      });
  }
  
  // Hàm đăng nhập
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        document.getElementById("message").innerText = "Đăng nhập thành công!";
        setTimeout(() => {
          window.location.href = "qlsv.html";
        }, 2000);
      })
      .catch((error) => {
        document.getElementById("message").innerText = error.message;
      });
  }
  