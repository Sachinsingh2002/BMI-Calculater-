function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height === '' || weight === '') {
        alert('Please enter both height and weight.');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;

    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }

    document.getElementById('result').innerText = resultText;
}
