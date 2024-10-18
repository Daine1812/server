// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDKefx3IJAJ4BA9po2xRTo45gSeqEQEXg",
    authDomain: "save-1fccd.firebaseapp.com",
    projectId: "save-1fccd",
    storageBucket: "save-1fccd.appspot.com",
    messagingSenderId: "16629600307",
    appId: "1:16629600307:web:00ca5a37bc6dfaf278d346",
    measurementId: "G-XBMQBY4N09"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Khởi tạo Auth

// Hàm đăng ký
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password) // Gọi hàm tạo tài khoản
        .then((userCredential) => {
            alert("Đăng ký thành công!");
            console.log('Tài khoản đã được tạo:', userCredential);
        })
        .catch((error) => {
            alert(error.message);
            console.error('Lỗi khi đăng ký:', error);
        });
});

// Hàm đăng nhập
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password) // Gọi hàm đăng nhập
        .then((userCredential) => {
            alert("Đăng nhập thành công!");
            window.location.href = 'qlsv.html'; // Chuyển hướng đến trang qlsv.html
        })
        .catch((error) => {
            alert(error.message);
            console.error('Lỗi khi đăng nhập:', error);
        });
});
