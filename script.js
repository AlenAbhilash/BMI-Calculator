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

female.addEventListener('click', () => {
    selectvaluefemale.innerHTML = 'Selected';
    selectvaluemale.innerHTML = 'Male';
});

male.addEventListener('click', () => {
    selectvaluemale.innerHTML = 'Selected';
    selectvaluefemale.innerHTML = 'Female';
});

weight.addEventListener('input', () => {
    weightdisplay.innerHTML = `${weight.value} Kg`;
});

height.addEventListener('input', () => {
    heightdisplay.innerHTML = `${height.value} Cms`;
});

function Bmicalculate() {
    let weightValue = parseFloat(weight.value);
    let heightValue = parseFloat(height.value);
    let mheight = heightValue / 100;
    let bmi = weightValue / (mheight * mheight);
    bmiscroe.innerHTML = `${bmi.toFixed(2)}`;
    let finalscore = bmi.toFixed(2);
    defaultshow.innerHTML = '';
    document.getElementById('defultcateogry').innerHTML = '';
    document.getElementById('description').innerHTML = '';

    if (finalscore < 18.5) {
        document.getElementById('defultcateogry').innerHTML = 'Under Weight';
        defultcateogry.style.color = 'blue';
        document.getElementById('description').innerHTML = 'Focus on gradual weight gain through a combination of diet changes, increased exercise, and professional support.';
    } else if (finalscore >= 18.5 && bmi < 24.9) {
        document.getElementById('defultcateogry').innerHTML = 'Normal Weight';
        defultcateogry.style.color = 'green';
        document.getElementById('description').innerHTML = 'Maintain a balanced diet and regular exercise to keep your weight in a healthy range.';
    } else if (finalscore >= 25 && bmi < 29.9) {
        document.getElementById('defultcateogry').innerHTML = 'Over Weight';
        defultcateogry.style.color = 'orange';
        document.getElementById('description').innerHTML = 'Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.';
    } else {
        document.getElementById('defultcateogry').innerHTML = 'Obesity';
        defultcateogry.style.color = 'red';
        document.getElementById('description').innerHTML = 'Consult a healthcare provider for a personalized plan to manage your weight and health.';
    }
}

bmical.addEventListener('click', () => {
    Bmicalculate();
});
