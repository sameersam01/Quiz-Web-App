const questions = [
  {
    que: "Which one is Markup-Language?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "Which one is game?",
    a: "figma",
    b: "CSS",
    c: "bgmi",
    d: "PHP",
    correct: "c",
  },
  {
    que: "who is snake?",
    a: "Friends",
    b: "family",
    c: "animal",
    d: "gf",
    correct: "a",
  },
  {
    que: "What is the purpose of the 'typeof' operator in JavaScript?",
    a: "To check if a variable is defined",
    b: "To determine the data type of a value",
    c: "To create a new variable",
    d: "To iterate over an array",
    correct: "b",
  },
  {
    que: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    a: "'let' and 'const' are block-scoped, while 'var' is function-scoped",
    b: "'let' is used for loops, 'const' for constants, and 'var' for variables",
    c: "'let' is for numbers, 'const' for strings, and 'var' for booleans",
    d: "'let' and 'var' are the same, and 'const' is used for constants",
    correct: "a",
  },
  {
    que: "What is the purpose of the 'this' keyword in JavaScript?",
    a: "To refer to the current HTML document",
    b: "To refer to the previous function in the call stack",
    c: "To refer to the current object or context",
    d: "To declare a new variable",
    correct: "c",
  },
    {
    que: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    que: "Which planet is known as the Red Planet?",
    a: "Mars",
    b: "Jupiter",
    c: "Venus",
    d: "Saturn",
    correct: "a",
  },
  {
    que: "Who wrote 'Romeo and Juliet'?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Jane Austen",
    d: "Mark Twain",
    correct: "b",
  },
  {
    que: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Lion",
    correct: "b",
  },
  {
    que: "Which programming language is often used for web development?",
    a: "Java",
    b: "Python",
    c: "Ruby",
    d: "JavaScript",
    correct: "d",
  },
  {
    que: "In what year did the Titanic sink?",
    a: "1912",
    b: "1923",
    c: "1901",
    d: "1935",
    correct: "a",
  },
  {
    que: "What is the capital of Japan?",
    a: "Seoul",
    b: "Beijing",
    c: "Tokyo",
    d: "Bangkok",
    correct: "c",
  },
];

let index = 0;
let right=0;
let wrong = 0;
let total = questions.length;

const questionBox = document.getElementById("question-box");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if(index===total){
   return endQuiz()
  }

  reset();
  const data = questions[index];
  questionBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer=input.value;
    }
  });
  return answer
};

const reset = () => {
  optionInputs.forEach((input) => {
    if (input.checked) {
      input.checked=false;
    }
  });
};
const endQuiz=()=>{
  document.getElementById('box').innerHTML=`
   <h3> Thank you for playing the quiz <h3/>
   <h2> ${right}/${total} are correct <h2/>
   `
}

loadQuestion();
