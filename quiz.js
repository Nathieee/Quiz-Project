let countdown_Timer = document.getElementById('countdown_Timer');
let timeRemaining = 120;


function countdown(){
   let minutes = Math.floor(timeRemaining / 60);
   let seconds = timeRemaining % 60;
   
   if (seconds < 10){
    seconds = '0' + seconds;
   }

   countdown_Timer.innerHTML = minutes + " : " + seconds

   timeRemaining--;

   if (timeRemaining < 0){
    clearInterval(countdown);
    countdown_Timer.innerHTML = "Time up!";
    // modal.style.display = 'block';
    //     modalText.innerHTML = "Your score is " + score;
    //     let close = document.getElementsByClassName('close')[0];
    //     close.onclick = () => {
    //         modal.style.display = "none";
    // alert ('game over, Your score is ' + score);
   }   
   if (counter >= 10 ){
    timeRemaining = 120;    
    }
}

setInterval(countdown, 1000)




let questionsArr  = [
    {
        question : "Which is the Largest Desert in the World",
        options : ["Sahara", "Namib", "Kalahari", "Arabian"],
        answer : "Sahara"
    },
    {
        question : "Which is the tallest Mountain in the World",
        options : ["Mkalu", "Manaslu", "Kilimanjaro", "Everest"],
        answer : "Everest"
    },
    {
        question : "Which is the Longest River in the World",
        options : ["Amazon", "Nile", "Mississppi", "Yangtze"],
        answer :  "Nile"
    },
    {
        question : "Which is the Largest island in the World",
        options : ["Borneo", "Baffin", "Greenland", "Honshu"],
        answer : "Greenland"
    },
    {
        question : "Which of these is the smallest country",
        options : ["Iceland", "Malta", "San Marino", "Vatican City"],
        answer : "Vatican City"
    },
    {
        question : "How many Countries are there in Africa",
        options : ["52", "53", "54", "55"],
        answer : "54"
    },
    {
        question : "Which Planet is the Closest to the Sun",
        options : ["Mercury", "Mars", "Pluto", "Venus"],
        answer : "Venus"
    },
    {
        question : "Which Country produces the largest export of Aluminium Worldwide",
        options : ["Kenya", "Iran", "Chile", "Jamaica"],
        answer : "Jamaica"
    },
    {
        question : "Which of these is the Largest Waterfalls in the world",
        options : ["Tuguela Falls", "Angel Falls", "Iguazu Falls", "Victoria Falls"],
        answer : "Victoria Falls"
    },
    {
        question : "Which of these is the Largest State in Nigeria by Land Mass",
        options : ["Niger State", "Taraba State", "Borno State", "Kaduna State"],
        answer : "Niger State"
    }   
]

let displayQuestion = document.getElementById('displyQuestion');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let clickable = document.querySelectorAll('.clickable');
let counter = 0;
let score = 0;
let modal = document.getElementById("modal");
let modalText = document.getElementById("modalText");

function checkTimer() {
    countdown();
    if (counter >= 10){
        // alert ('game over, Your score is ' + score)
        modal.style.display = 'block';
        modalText.innerHTML = "Your score is " + score;
        let close = document.getElementsByClassName('close')[0];
        close.onclick = () => {
            modal.style.display = "none";
            window.location.href = 'home.html'
        }
    }
}


function currentQuestion(selectedAnswer) {

    checkTimer();

    let shuffle = Math.floor(Math.random() * questionsArr.length);
    // console.log(shuffle);
    
    
    let selectedQuestion = questionsArr[shuffle];
    // console.log(selectedQuestion);
    
    displayQuestion.innerText = selectedQuestion.question;
    option1.innerText = selectedQuestion.options[0];
    option2.innerText = selectedQuestion.options[1];
    option3.innerText = selectedQuestion.options[2];
    option4.innerText = selectedQuestion.options[3];


    counter++;
};
currentQuestion();


const checkAnswer = (selectedAnswer) => {
    // let selectedAnswer = e.target.innerHTML;
    // let points = 0;
    
    let selectedQuestion = questionsArr.find((thisQuestion) => {
        return thisQuestion.question === displayQuestion.innerHTML
    })
    // console.log(selectedQuestion);
    if (selectedQuestion.answer == selectedAnswer){
        score++;        
        return true
    }
    else if (selectedQuestion.answer != selectedAnswer){
        
        return false;
    }        
}


clickable.forEach((answer) => {
    answer.onclick = (e) => {
        e.preventDefault();
        let selectedAnswer = e.target.innerHTML;
        checkAnswer(selectedAnswer);
        console.log(score);
        currentQuestion();
    }
});

