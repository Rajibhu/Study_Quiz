const questions = {
  "11_math": [
    { q: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2"], answer: 1 },
    { q: "What is the integral of 1/x?", options: ["x", "ln|x|", "x^2/2", "1/x^2"], answer: 1 }
  ],
  "11_physics": [
    { q: "What is the SI unit of power?", options: ["Watt", "Joule", "Newton", "Volt"], answer: 0 },
    { q: "Acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9 m/s²"], answer: 0 }
  ],
  "11_chemistry": [
    { q: "Atomic number of Carbon?", options: ["6", "8", "12", "4"], answer: 0 },
    { q: "Valency of Oxygen?", options: ["2", "4", "6", "1"], answer: 0 },
    { q: "What are the key factors of solid-state reactions?", option: ["Size of the particles", "Mechanical properties of solids", "Thermodynamic and kinetic factors", "Environmental factors"], answer: 3},

{ q: "Which approach can be employed to produce a high degree of homogeneity in the creation of ZnFe2O4 spinel?", option: ["Distillation method", "Vaporization method", "Coprecipitation method", "Crystallization method"], answer: 2},

{ q: "In the zone melting approach, which of the following principles was used?", option: ["Impurities concentrate in the liquid phase than in the gaseous phase", "Impurities concentrate in the solid than in the liquid phase", "Impurities concentrate in the gaseous phase than in the solid phase",  "Impurities concentrate in the liquid phase than in the solid phase"], answer: 3}
  ],
  "11_biology": [
    { q: "Basic unit of life?", options: ["Cell", "Tissue", "Organ", "Organism"], answer: 0 },
    { q: "Plant cell has?", options: ["Chloroplast", "Centrioles", "Flagella", "Cilia"], answer: 0 }
  ],
  "12_math": [
    { q: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "-sin(x)", "1"], answer: 0 },
    { q: "∫cos(x) dx =", options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"], answer: 0 }
  ],
  "12_physics": [
    { q: "Unit of Force?", options: ["Newton", "Watt", "Joule", "Pascal"], answer: 0 },
    { q: "Speed of Light?", options: ["3x10^8 m/s", "5x10^6 m/s", "10^3 m/s", "None"], answer: 0 }
  ],
  "12_chemistry": [
    { q: "pH of pure water?", options: ["7", "0", "14", "1"], answer: 0 },
    { q: "Chemical formula of sulfuric acid?", options: ["H2SO4", "HCl", "HNO3", "NaOH"], answer: 0 }
  ],
  "12_biology": [
    { q: "DNA stands for?", options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Dinucleic Acid", "None"], answer: 0 },
    { q: "Number of chambers in human heart?", options: ["4", "2", "3", "1"], answer: 0 }
  ]
};


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
