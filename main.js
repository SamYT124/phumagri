const startTime = Date.now();

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const timeElapsed = Date.now() - startTime;
  const minimumDisplayTime = 3000; 
  const remainingTime = Math.max(0, minimumDisplayTime - timeElapsed);
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.remove();
    }, 500); 
    
  }, remainingTime);
});

const surveyAnswers = {};
const quest2Sur = document.getElementById('q2');
const farmopt = document.getElementById('farOpt');
const custopt = document.getElementById('cusOpt');

function saveAnswer(questionKey, answerValue, currentStep) {
    surveyAnswers[questionKey] = answerValue;
    console.log("Current Answers:", surveyAnswers);
    const currentEl = document.querySelector(`.question-step[data-step="${currentStep}"]`);
    const nextEl = document.querySelector(`.question-step[data-step="${currentStep + 1}"]`);
      
    if (nextEl) {
        currentEl.classList.remove('active');
        nextEl.classList.add('active');
    }

    if (currentStep === 1) {
        if (surveyAnswers['lang'] === "khm") {
            quest2Sur.textContent = 'តើមួយណាដែលពណ៌នាអំពីអ្នកបានល្អបំផុត?';
            farmopt.textContent = 'កសិករ';
            custopt.textContent = 'អតិថិជន';
        } else if (surveyAnswers['lang'] === "chi") {
            quest2Sur.textContent = '以下哪项最能描述你?';
            farmopt.textContent = '农民';
            custopt.textContent = '买主';
        } else {
            return;
        }
    }
}