const questions =[{
    'que' : 'Which of the following is markup language',
    'a': 'HTML',
    'b':'CSS',
    'C':'Javascript',
    'd':'All',
    'correct': 'a'
},
{
    'que' : 'Which of the following is cascading stylesheet',
    'a': 'HTML',
    'b':'CSS',
    'C':'Javascript',
    'd':'All',
    'correct': 'b'
},
{
    'que' : 'Which of the following is scripting language',
    'a': 'HTML',
    'b':'CSS',
    'C':'Javascript',
    'd':'All',
    'correct': 'c'
 }

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    queBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.C;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = ()=> {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the quiz</h3>
    <h2> ${right}/ ${total} are correct </h2>
    </div>
    `
}
loadQuestion();