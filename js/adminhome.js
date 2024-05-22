document.getElementById('addButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateForm(name, email, password, confirmPassword)) {
        alert('Please correct the highlighted fields.');
        return;
    }

    if (confirm('Confirm add?')) {
        alert('Admin added successfully.');
        document.getElementById('adminForm').reset();
    } else {
        alert('Admin not added.');
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('adminForm').reset();
});

function validateForm(name, email, password, confirmPassword) {
    let isValid = true;

    if (!name) {
        isValid = false;
        document.getElementById('name').style.borderColor = 'red';
    } else {
        document.getElementById('name').style.borderColor = '';
    }

    if (!email || !validateEmail(email)) {
        isValid = false;
        document.getElementById('email').style.borderColor = 'red';
    } else {
        document.getElementById('email').style.borderColor = '';
    }

    if (!password || !validatePassword(password)) {
        isValid = false;
        document.getElementById('password').style.borderColor = 'red';
    } else {
        document.getElementById('password').style.borderColor = '';
    }

    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirmPassword').style.borderColor = 'red';
    } else {
        document.getElementById('confirmPassword').style.borderColor = '';
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(password);
}
