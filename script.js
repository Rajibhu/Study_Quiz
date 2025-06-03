let currentQuiz = [];
let currentIndex = 0;
let score = { right: 0, wrong: 0, skipped: 0, answered: 0 };
let timerInterval;
let timeElapsed = 0;

function playClick() {
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  const cls = document.getElementById('classSelect').value;
  const sub = document.getElementById('subjectSelect').value;
  const errorMsg = document.getElementById('errorMsg');
  errorMsg.innerText = '';

  if (!cls || !sub) {
    errorMsg.innerText = 'Please select both class and subject.';
    return;
  }

  const key = `${cls}_${sub}`;
  if (!questions.hasOwnProperty(key)) {
    errorMsg.innerText = 'No questions available for the selected class and subject.';
    return;
  }

  currentQuiz = shuffleArray([...questions[key]]);
  document.getElementById('selection').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  currentIndex = 0;
  score = { right: 0, wrong: 0, skipped: 0, answered: 0 };
  timeElapsed = 0;
  document.getElementById('timer').innerText = `Time: 0s`;

  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('timer').innerText = `Time: ${timeElapsed}s`;
  }, 1000);

  showQuestion();
}

function showQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById('questionText').innerText = q.q;
  const options = document.getElementById('options');
  options.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerText = opt;
    div.onclick = () => { playClick(); handleAnswer(idx, div); };
    options.appendChild(div);
  });
}

function handleAnswer(selected, element) {
  const correct = currentQuiz[currentIndex].answer;
  const optionElements = document.querySelectorAll('.option');
  optionElements.forEach(opt => opt.onclick = null);

  if (selected === correct) {
    element.classList.add('correct');
    score.right++;
  } else {
    element.classList.add('wrong');
    optionElements[correct].classList.add('correct');
    score.wrong++;
  }
  score.answered++;
  setTimeout(() => {
    nextQuestion();
  }, 800);
}

function skipQuestion() {
  score.skipped++;
  nextQuestion();
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  clearInterval(timerInterval);
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('dashboard').innerHTML = `
    <h2>Result Dashboard</h2>
    <p>Answered: ${score.answered}</p>
    <p>Skipped: ${score.skipped}</p>
    <p>Correct: ${score.right}</p>
    <p>Wrong: ${score.wrong}</p>
    <p>Total Time: ${timeElapsed} seconds</p>
    <button onclick="restartQuiz()" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">Restart Quiz</button>`;
}

function restartQuiz() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('selection').style.display = 'block';
}
