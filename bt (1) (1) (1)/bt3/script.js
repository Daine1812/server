// Xử lý thêm thông báo
document.getElementById('notification-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push({ title, content });
    localStorage.setItem('notifications', JSON.stringify(notifications));

    alert('Thông báo đã được lưu!');
    window.location.href = 'xem_thong_bao.html'; // Chuyển đến trang xem thông báo
});

// Hiển thị thông báo trong xem_thong_bao.html
if (document.getElementById('notification-list')) {
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = notifications.map(n => `<div><h3>${n.title}</h3><p>${n.content}</p></div>`).join('');
}

// Xử lý thêm thời khóa biểu
document.getElementById('schedule-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const time = document.getElementById('time').value;

    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.push({ subject, time });
    localStorage.setItem('schedules', JSON.stringify(schedules));

    alert('Thời khóa biểu đã được lưu!');
    window.location.href = 'xem_thoi_khoa_bieu.html'; // Chuyển đến trang xem thời khóa biểu
});

// Hiển thị thời khóa biểu trong xem_thoi_khoa_bieu.html
if (document.getElementById('schedule-list')) {
    const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = schedules.map(s => `<div><strong>${s.subject}</strong>: ${s.time}</div>`).join('');
}

// Xử lý thêm điểm
document.getElementById('grade-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const student = document.getElementById('student').value;
    const grade = document.getElementById('grade').value;

    const grades = JSON.parse(localStorage.getItem('grades')) || [];
    grades.push({ student, grade });
    localStorage.setItem('grades', JSON.stringify(grades));

    alert('Điểm đã được lưu!');
    window.location.href = 'xem_diem.html'; // Chuyển đến trang xem điểm
});

// Hiển thị điểm trong xem_diem.html
if (document.getElementById('grade-list')) {
    const grades = JSON.parse(localStorage.getItem('grades')) || [];
    const gradeList = document.getElementById('grade-list');
    gradeList.innerHTML = grades.map(g => `<div><strong>${g.student}</strong>: ${g.grade}</div>`).join('');
}
