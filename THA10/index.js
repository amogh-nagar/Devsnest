const cards = document.querySelectorAll('.card');

let lockboard = false;
let hasflippedcard = false;
let firstcard, secondcard;

function flipcard() {
  if (lockboard) return;
  if (this === firstcard) {
    return;
  }
  this.classList.toggle('flip');
  if (!hasflippedcard) {
    hasflippedcard = true;
    firstcard = this;
  } else {
    hasflippedcard = false;
    secondcard = this;

    checkformatch();
  }
}

function checkformatch() {
  //do card match
  if (firstcard.dataset.framework === secondcard.dataset.framework) {
    disablecards();
  } else {
    unflipcards();
  }
}

function disablecards() {
  firstcard.removeEventListener('click', flipcard);
  secondcard.removeEventListener('click', flipcard);
  resetboards();
}

function unflipcards() {
  lockboard = true;
  setTimeout(() => {
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');

    lockboard = false;
  }, 1500);
}
function resetboards() {
  hasflippedcard = false;
  lockboard = false;
  firstcard = null;
  secondcard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach((card) => card.addEventListener('click', flipcard));
