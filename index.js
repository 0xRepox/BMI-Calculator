function bmiCalculator(weight, height) {
    var weight = prompt("What is your current weight?");
    var height = prompt("What is your current height?");
    var bmi = Math.floor(weight / Math.pow(height, 2));
    return interpretation(bmi);
}

function interpretation(bmi) {
    if (bmi < 18.5) {
        console.log("Your BMI is " + bmi + ", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Your BMI is " + bmi + ", so you are normal weight.");
    } else {
        console.log("Your BMI is " + bmi + ", so you are overweight.");
    }
}

// Call the function to calculate BMI
bmiCalculator(weight, height);
