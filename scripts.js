// 간단한 클라이언트 측 인증 (보안성 없음, 데모용)

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('회원가입 성공!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                alert('로그인 성공!');
                window.location.href = 'index.html';
            } else {
                alert('사용자 이름 또는 비밀번호가 잘못되었습니다');
            }
        });
    }
});
