const form = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const provinceSelect = document.getElementById('province');
const districtSelect = document.getElementById('district');

// Function to check if passwords match
const checkPasswordMatch = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordInput.classList.add('error');
        return false;
    } else {
        confirmPasswordInput.classList.remove('error');
        return true;
    }
};

// Event listener for password input
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

// Function to dynamically populate districts based on selected province
const populateDistricts = () => {
    const province = provinceSelect.value;
    districtSelect.innerHTML = ''; // Clear previous options

    if (province === 'Central') {
        const districts = ['Matale', 'Kandy', 'Nuwara Eliya'];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
    // Add other provinces and their districts here
};

// Event listener for province select
provinceSelect.addEventListener('change', populateDistricts);