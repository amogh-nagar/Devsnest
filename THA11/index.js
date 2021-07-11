// const d=document.querySelectorAll('quiz-elements-1');
// console.log(d);
let current = 1;
display(current);
function clickhandler(x) {
  let p = +document.querySelector('.number1').innerHTML;
  p += 1;
  document.querySelector('.number1').innerHTML = p;
  x.classList.add('green');

  setTimeout(() => {
    current += 1;
    if (current === 4) {
      current = 1;
    }
    display();
    x.classList.remove('green');
  }, 1500);
}

function wronghandler(x) {
  let p = +document.querySelector('.number1').innerHTML;
  p -= 1;
  document.querySelector('.number1').innerHTML = p;
  x.classList.add('red');
  setTimeout(() => {
    current += 1;
    if (current === 4) {
      current = 1;
    }
    display();
    x.classList.remove('red');
  }, 1500);
}

function next1() {
  let x = +document.querySelector('.number2').innerHTML;
  if (x < 4) {
    x += 1;
  } else {
    x = 1;
  }
  document.querySelector('.number2').innerHTML = x;
  current += 1;
  console.log(current);
  display();
}
function previous1() {
  //   console.log('Clicked');

  let x = +document.querySelector('.number2').innerHTML;
  if (x > 1) {
    x -= 1;
  } else {
    x = 4;
  }
  current -= 1;
  console.log(current);
  document.querySelector('.number2').innerHTML = x;
  display();
}

function display() {
  let questions = document.querySelectorAll('.quiz-elements');
  let question = questions[current - 1];

  if (current > 4) {
    current = 1;
  } else if (current < 1) {
    current = 4;
  }

  if (current == 1) {
    question.children[2].children[0].classList.add('remove');
    // let button = document.querySelector('.left');
    // button.style.display = 'none';
  } else if (current == 4) {
    // let button = document.querySelector('.right');
    // button.style.display = 'none';
    question.children[2].children[1].classList.add('remove');
  }

  console.log();
  questions.forEach((question) => {
    question.style.display = 'none';
  });
  question.style.display = 'flex';
}
