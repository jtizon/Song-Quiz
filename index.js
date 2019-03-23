let questionTemp = 0;
let answerCounter = 0;

const questions = [
  {
    text: `Who sang the song that goes like, “Baby! Baby! Baby! Ooh!”?`,
    ans: `Justin Bieber`,
    ans1: `Justin Timberlake`,
    ans2: `Justin Verlander`
  },
  {
    text: `Finish the lyric: “Just a small town girl, livin' in a [lyric]”`,
    ans: `Boney world`,
    ans1: `Lonely world`,
    ans2: `Foney world`,
  },
  {
    text: `Who sang the song that goes like, “His palms are sweaty, knees weak, arms are heavy”`,
    ans: `M&M`,
    ans1: `Eminem`,
    ans2: `Snickers`,
  },
  {
    text: `Finish the lyric: “Can we pretend that airplanes in the night sky are [lyric]”`,
    ans: `Like shooting stars`,
    ans1: `Like pooping cars`,
    ans2: `Like lootings carts`,
  },
  {
    text: `Who sang the song that goes like, “I tried so hard, And got so far, But in the end, It doesn't even matter”`,
    ans: `Linkin Park`,
    ans1: `Transformers`,
    ans2: `South Park`,
  },
  {
    text: `Finish the lyric: "Billie Jean is not my [lyric]"`,
    ans: `Mother`,
    ans1: `Brother`,
    ans2: `Lover`,
  },
  {
    text: `Who sang the song that goes like, "Sweet Caroline! Bum Bum Bumm! Good times never seemed so good!"? `,
    ans: `Jill Diamond`,
    ans1: `Neil Copper`,
    ans2: `Neil Diamond`,
  },
  {
    text: `Finish the lyric: "Hey Jude, [lyric]"`,
    ans: `don't make it bad`,
    ans1: `don't make a lad`,
    ans2: `made in a lab`,
  },
  {
    text: `Who sang the song that goes like, "Mama, just killed a man. Put a gun against his head. Pulled my trigger, now he's [lyric]"`,
    ans: `Fed`,
    ans1: `Dead`,
    ans2: `Lead`,
  },
  {
    text: `Finish the lyric: "And I will always, [lyric] you!"`,
    ans: `Love`,
    ans1: `Hug`,
    ans2: `Hate`,
  }

];

const answers = [
  `Justin Bieber`,
  `Lonely world`,
  `Eminem`,
  `Like shooting stars`,
  `Linkin Park`,
  `Lover`,
  `Neil Diamond`,
  `don't make it bad`,
  `Dead`,
  `Love`
];




function questionPage(correctAnswers, question, questionsAnswered){
  const temp = questionTemp + 1;
  return `
    <header class="banner">${question.text}</header>
    <form>
      <fieldset>
        <label>
          <input class="answer" type="radio" name="option" ></input>
          <span>${question.ans}</span>
        </label>
        <label>
          <input class="answer" type="radio" name="option"></input>
          <span>${question.ans1}</span>
        </label>
        <label>
          <input class="answer" type="radio" name="option" checked></input>
          <span>${question.ans2}</span>
        </label>
      </fieldset>  
      <button id="js-submit-button">Submit</button>
    </form>
    <div id = "currentScore">
      <span id="quesCounter">Question: ${temp}/10</span>
      <span id="scoreCounter">Score: ${answerCounter}</span>
    </div>`;

}

function correctPage(){
  const ques = questionTemp + 1;
  if(ques === 10){
    return `
      <header class="banner">Congrats! You have finished the song quiz! You're final score is: ${answerCounter}! If you would like to restart the game press the button below.</header>
      <button id="js-restart-button">Restart</button>`;
  }else{
    return `
    <header class="banner">Congrats! You got question ${ques}  right!</header>
    <button id="js-next-button">Next Question</button>`;
  }
  
}

function incorrectPage(){
  const ques = questionTemp + 1;
  if(ques === 10){
    return `
      <header class="banner">Sorry the correct answer was "${answers[questionTemp]}"! But on the other hand congrats! You have finished the song quiz! You're final score is: ${answerCounter}! If you would like to restart the game press the button below.</header>
      <button id="js-restart-button">Restart</button>`;
  }else{
    return `
      <header class="banner">Sorry you got question ${ques}  wrong! The correct answer was "${answers[questionTemp]}"!</header>
      <button id="js-next-button">Next Question</button>`;
  }
}

function handleStartButton() {
  $('#js-start-button').click(function(event) {
    const currentQues = questions[questionTemp];
    const questionsAnswered = questionTemp;
    $('#page').html(questionPage(answers, currentQues, questionsAnswered));
  });
}

function handleNextButton() {
  $('#page').on('click', '#js-next-button', function(event){
    const currentQues = questions[questionTemp];
    const questionsAnswered = questionTemp;
    $('#page').html(questionPage(answers, currentQues, questionsAnswered));
  });
}


function handleSubmitButton(){
  $('#page').on('click', '#js-submit-button', function(event){
  event.preventDefault()
  const temp = $('input:checked').siblings('span');
  if(temp.text() === answers[questionTemp]){
    handleCorrect();
    questionTemp++;
    answerCounter++;
  }
  else{
    console.log(answers[questionTemp]);
    console.log(temp);
    handleIncorrect();
    questionTemp++;
  }
  });
}
function resultsPage(){
  return 
      `<header class="banner"> Congratulations again for finishing the song quiz!</header>
      <h1>You're final score was: ${answerCounter}! If you would like to play again hit the restart button below! Good luck!</hi>
      <button id="js-restart-button">Restart</button>`;
}
function handleFinalButton(){
  $('#page').on('click', '#js-next-button', function(event){
    $('#page').html(resultsPage());
  });

}

function handleRestartButton(){
  
  $('#page').on('click', '#js-restart-button', function(event){
    questionTemp = 0;
    const currentQues = questions[questionTemp]
    answerCounter = 0;
    $('#page').html(questionPage(answers, currentQues, answerCounter));
  });
}


function handleCorrect(){
  $('#page').html(correctPage());
}

function handleIncorrect(){
  $('#page').html(incorrectPage());
}


handleStartButton();
handleSubmitButton();
handleNextButton();
handleFinalButton();
handleRestartButton();
