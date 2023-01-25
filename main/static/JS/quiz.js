const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const yourScore = document.getElementById('your-score')

let amountAnswered = 0;
let gameOver = true;
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  gameOver = false;
  amountAnswered = 0
  yourScore.innerText = ""
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn-answer')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
//activates when pressing next
function resetState() {
  console.log("points: " + amountAnswered)
  console.log("Question number: " + (currentQuestionIndex + 1))
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer(e) {
  if (gameOver) return
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct) amountAnswered += 1
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Попробовать ещё раз?'
    startButton.classList.remove('hide')
    gameOver = true
    yourScore.innerText = "Правильных ответов: " + amountAnswered + " / " + questions.length
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Что такое HTML? ',
    answers: [
      { text: 'Hyperlinks Text Massive Language', correct: false },
      { text: 'Hyper Text Marketing Language', correct: false },
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Hyper Textarea Markup Language', correct: false }
    ]
  },
  {
    question: 'Что такое CSS? ',
    answers: [
      { text: 'Cascading Sheets Style', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cartoon Style Shine', correct: false },
      { text: 'Cascading Sheets Source', correct: false }
    ]
  },
  {
    question: 'Какой из этих тегов отвечает за параграф? ',
    answers: [
      { text: '<p>', correct: true },
      { text: '<hr>', correct: false },
      { text: '<br>', correct: false },
      { text: 'color', correct: false }
    ]
  },  
  {
    question: 'Какой из этих свойств нужен для внешних отступов? ',
    answers: [
      { text: 'content', correct: false },
      { text: 'padding', correct: false },
      { text: 'border', correct: false },
      { text: 'margin', correct: true }
    ]
  },
  {
    question: 'Как подключать стили? ',
    answers: [
      { text: 'stayle', correct: false },
      { text: 'script', correct: false },
      { text: 'styles', correct: false },
      { text: 'style', correct: true }
    ]
  },
  {
    question: 'Как сделать нумерований список? ',
    answers: [
      { text: 'ul>ol', correct: false },
      { text: 'li>ol', correct: false },
      { text: 'ul>li', correct: true },
      { text: 'ol>ul', correct: false }
    ]
  },
  {
    question: 'Как убрать декорацию с ссылки? ',
    answers: [
      { text: 'text-decoration', correct: true },
      { text: 'decoration-none', correct: false },
      { text: 'under-decoration', correct: false },
      { text: 'decoration-under', correct: false }
    ]
  },
  {
    question: 'Как вызвать id? ',
    answers: [
      { text: '$', correct: false },
      { text: '.', correct: false },
      { text: '@', correct: false },
      { text: '#', correct: true }
    ]
  },
  {
    question: 'Как скруглить углы? ',
    answers: [
      { text: 'border-rounded', correct: false },
      { text: 'round-image', correct: false },
      { text: 'image-round', correct: false },
      { text: 'border-radius', correct: true }
    ]
  },
  {
    question: 'Как подключать класс? ',
    answers: [
      { text: '#', correct: false },
      { text: '$', correct: false },
      { text: '%', correct: false },
      { text: '.', correct: true }
    ]
  },
  {
    question: 'Выберите правильную последовательность в таблицах? ',
    answers: [
      { text: 'thead>tfoot>tbody', correct: false },
      { text: 'tbody>thead>tfoot', correct: false },
      { text: 'thead>tbody>tfoot', correct: true },
      { text: 'tcont>tbody>tfoot', correct: false }
    ]
  },
  {
    question: 'img это парный тэг? ',
    answers: [
      { text: 'Да', correct: false },
      { text: 'Нет', correct: true }
    ]
  },
  {
    question: 'Через какое свойство можно добавляют субтитры?',
    answers: [
      { text: 'video', correct: false },
      { text: 'track', correct: true },
      { text: 'audio', correct: false },
      { text: 'subtitles', correct: false }
    ]
  },
  {
    question: 'Может ли flex одновременно работать со строкой или столбцом?',
    answers: [
      { text: 'Да может', correct: false },
      { text: 'Не может', correct: true }
    ]
  },
  {
    question: 'Может ли grid одновременно работать со строкой или столбцом?',
    answers: [
      { text: 'Да может', correct: true },
      { text: 'Не может', correct: false }
    ]
  }
]