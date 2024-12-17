import { Question } from "./questions.module.js";
import { Quiz } from "./quiz.module.js";

const categoryMenu = document.getElementById("categoryMenu");
const difficultyOptions = document.getElementById("difficultyOptions");
const questionsNumber = document.getElementById("questionsNumber");
const startQuiz = document.getElementById("startQuiz");
const quizForm = document.getElementById("quizForm");


export let allQuestions;

export let myQuiz;

startQuiz.addEventListener("click", async () => {
   myQuiz = new Quiz(
    categoryMenu.value,
    difficultyOptions.value,
    questionsNumber.value
  );

   allQuestions = await myQuiz.getQuizData();

  quizForm.classList.replace('d-flex' , 'd-none' );

  let myQuestions = new Question(0)

  myQuestions.displayData();

});
