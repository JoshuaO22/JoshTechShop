// Developer: Joshua Odom
// Website link: https://joshuao22.github.io/JoshTechShop/
// Source Link: https://github.com/JoshuaO22/JoshTechShop
const requests = [];
const logins = [];

const requestForm = document.getElementById('request-form');
const adminLoginForm = document.getElementById('admin-login-form');

requestForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const request = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        issueType: document.getElementById('issue-type').value,
        message: document.getElementById('description').value
    }

    requests.push(request);
    console.log(request);
    requestForm.reset();
});

adminLoginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }

    logins.push(loginData);
    console.log(loginData);
    adminLoginForm.reset();
});