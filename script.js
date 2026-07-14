// BMI Calculator
function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height === '' || weight === '' || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(1);

    var category = '';
    var color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
    } else if (bmi < 25) {
        category = 'Normal';
        color = '#2ecc71';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
    } else {
        category = 'Obese';
        color = '#e74c3c';
    }

    document.getElementById('bmi-number').textContent = 'BMI: ' + bmi;
    document.getElementById('bmi-category').textContent = 'Category: ' + category;
    document.getElementById('bmi-category').style.color = color;
    document.getElementById('bmi-result').style.display = 'block';
}

// Contact Form Validation
function validateForm() {
    var valid = true;
    var name = document.getElementById('contact-name').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    document.getElementById('name-error').style.display = name === '' ? 'block' : 'none';
    if (name === '') valid = false;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('email-error').style.display = (!emailPattern.test(email)) ? 'block' : 'none';
    if (!emailPattern.test(email)) valid = false;

    document.getElementById('message-error').style.display = message === '' ? 'block' : 'none';
    if (message === '') valid = false;

    if (valid) {
        alert('Thank you for your message!');
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
    }
}
