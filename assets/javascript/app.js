var myQuestions = [
    {
        question: "What is the main character's nickname?",
        answers: {
            a: "The Man " ,
            b: "The Dude " ,
            c: "The Homie "
        },
        correctAnswer: "b"
    },
    {
        question: "What body part is sent to Lebowski as evidence of Bunny being kidnapped?",
        answers: {
            a: "Toe " ,
            b: "Finger " ,
            c: "Ear "
        },
        correctAnswer: "a"
    },
    {
        question: "What animal is thrown into the dude's bathtub?",
        answers: {
            a:"Rabbit " ,
            b:"Cat " ,
            c:"Ferret "
        },
        correctAnswer: "c"
    },
    {
        question: "What item does the dude want Lebowski to give him money for?",
        answers: {
            a:"Bowling Ball " ,
            b:"Rug " ,
            c:"Lamp "
        },
        correctAnswer: "b"
    },
    {
        question:  "What does Walter fill the ransom briefcase with?",
        answers: {
            a:"Money ",
            b:"socks ",
            c:"Underwear "
        },
        correctAnswer: "c"
    },
    {
        question:  "What is Maude Lebowski's profession?",
        answers: {
            a:"Dancer " ,
            b:"Poet " ,
            c:"Artist "
        },
        correctAnswer: "c"
    },
    {
        question:  "What color does Jesus always wear?",
        answers: {
            a:"Purple ",
            b:"Green ",
            c:"Blue "
        },
        correctAnswer: "a"
    },
    {
        question:  "Bonus: What really ties a room together?",
        answers: {
            a:"Rug " ,
            b:"Lamp " ,
            c:"Couch "
        },
        correctAnswer: "a"
    },
]

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){

    //place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // hide the answers and questions
      answerContainers[questionNumber].style.display = "none";
      submitButton.style.display = "none";
      
    }
    // if answer is wrong or blank
    else{
      // hide the answers and questions
      answerContainers[questionNumber].style.display = "none";
      submitButton.style.display = "none";
     
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;

  
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

