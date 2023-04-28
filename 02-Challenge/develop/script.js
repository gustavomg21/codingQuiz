const quizData = [
    {
        question: "HTML stands for -",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        correct:"c"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "Head, HTML, Title, Body",
        d: "HTML, Head, Title, Body",
        correct:"d"
    },
    {
        question: "How to create a hyperlink in HTML?",
        a: "<a href = 'www.javatpoint.com'> javaTpoint.com </a>",
        b: "<a url = 'www.javatpoint.com' javaTpoint.com /a>",
        c: "<a link = 'www.javatpoint.com'> javaTpoint.com </a>",
        d: "<a> www.javatpoint.com <javaTpoint.com /a>",
        correct:"a"
    },
    {
        question: "The CSS property used to specify the transparency of an element is -",
        a: "opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
        correct:"a"
    },
    {
        question: "How to create a hyperlink in HTML?",
        a: "<a href = 'www.javatpoint.com'> javaTpoint.com </a>",
        b: "<a url = 'www.javatpoint.com' javaTpoint.com /a>",
        c: "<a link = 'www.javatpoint.com'> javaTpoint.com </a>",
        d: "<a> www.javatpoint.com <javaTpoint.com /a>",
        correct:"a"
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// Variables to keep track of current quiz question and score
let currentQuiz = 0
let score = 0
let countdown = 100;
let timerDisplay = document.getElementById('timer');

loadQuiz()

// Function to load quiz questions and choices onto the page
function loadQuiz() {

    deselectAnswer()

    const currentQuizData= quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

// This Function starts the timer and logs it to the screen
let timer = setInterval(function() {
    countdown--;
    timerDisplay.innerText = `Time left: ${countdown} seconds`;
  
    if (countdown <= 0) {
      clearInterval(timer);
      timerDisplay.innerText = "Timer ended";
    }
  }, 1000);

// Function to clear any previously selected answers
function deselectAnswer() {
    answerEls.forEach(answerEl=>answerEl.checked = false)
}

// Function to get the user's selected answer
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

// Event listener for when user submits their answer
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++

        }

        currentQuiz++
     // If there are more questions, load the next question
        if(currentQuiz< quizData.length){
            loadQuiz()
        } else {

            // If there are no more questions, display final score and retry button
            quiz.innerHTML =`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Retry</button>
            `
            
            
        }
            
    }
})



