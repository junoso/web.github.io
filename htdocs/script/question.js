const quizData = [
  {
      question: "Which element used in Mobile Suit Gundam: The Witch from Mercury?",
      a: "Plavsky particles",
      b: "Minovsky particle",
      c: "gn particles",
      d: "Permet",
      correct: "d",
  },
  {
      question: "Which mobile suit Suletta Mercury drives in Chapter 24?",
      a: "GUNDAM AERIAL REBUILD",
      b: "GUNDAM CALIBARN",
      c: "DEMI TRAINER",
      d: "GUNDAM AERIAL",
      correct: "b",
  },
  {
      question: "What does Gundam stand for?",
      a: "Gund-Arm",
      b: "Gundarm",
      c: "G-U-N-D-A-M-A-R-M",
      d: "GUNDAM",
      correct: "a",
  },
  {
      question: "Which mobile suit Suletta Mercury drives in Chapter 1?",
      a: "DEMI TRAINER",
      b: "GUNDAM AERIAL",
      c: "GUNDAM CALIBARN",
      d: "GUNDAM AERIAL REBUILD",
      correct: "b",
  },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})