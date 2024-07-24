let male = document.getElementById('male');
let female = document.getElementById('female');
let age = document.getElementById('age');
let weight = document.getElementById('weight');
let height = document.getElementById('height');


const defaultWeight = 10;
const defaultHeight = 25;

weightdisplay.innerHTML = `${defaultWeight} Kg`;
heightdisplay.innerHTML = `${defaultHeight} Cms`;

weight.value = defaultWeight;
height.value = defaultHeight;

let isMaleSelected = false;
let isFemaleSelected = false;

female.addEventListener('click', () => {
    isFemaleSelected = true;
    selectvaluefemale.innerHTML = 'Selected';
    selectvaluemale.innerHTML = 'Male';
});

male.addEventListener('click', () => {
    isMaleSelected = true;
    selectvaluemale.innerHTML = 'Selected';
    selectvaluefemale.innerHTML = 'Female';
});

weight.addEventListener('input', () => {
    weightdisplay.innerHTML = `${weight.value} Kg`;
});

height.addEventListener('input', () => {
    heightdisplay.innerHTML = `${height.value} Cms`;
});

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis not supported');
    }
}

function Bmicalculate() {
    console.log('Bmicalculate function called');
    if (!isMaleSelected && !isFemaleSelected) {
        alert('Please select either Male or Female');
        return;
    }
    if (age.value < 10) {
        alert('Please enter an age greater than 10');
        return;
    }
    let weightValue = weight.value;
    let heightValue = height.value;
    let mheight = heightValue / 100;
    let bmi = weightValue / (mheight * mheight);
    bmiscroe.innerHTML = `${bmi.toFixed(2)}`;
    let finalscore = bmi.toFixed(2);
    defaultshow.innerHTML = '';
    document.getElementById('defultcateogry').innerHTML = '';
    document.getElementById('description').innerHTML = '';

    let category = '';
    let description = '';

    if (finalscore < 18.5) {
        category = 'Under Weight';
        defultcateogry.style.color = 'blue';
        description = 'Focus on gradual weight gain through a combination of diet changes, increased exercise, and professional support.';
    } else if (finalscore >= 18.5 && bmi < 24.9) {
        category = 'Normal Weight';
        defultcateogry.style.color = 'green';
        description = 'Maintain a balanced diet and regular exercise to keep your weight in a healthy range.';
    } else if (finalscore >= 25 && bmi < 29.9) {
        category = 'Over Weight';
        defultcateogry.style.color = 'orange';
        description = 'Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.';
    } else {
        category = 'Obesity';
        defultcateogry.style.color = 'red';
        description = 'Consult a healthcare provider for a personalized plan to manage your weight and health.';
    }

    document.getElementById('defultcateogry').innerHTML = category;
    document.getElementById('description').innerHTML = description;
    speak(`Your BMI score is ${finalscore}. You are categorized as ${category}. ${description}`);
}




bmical.addEventListener('click', () => {
    Bmicalculate();
});
