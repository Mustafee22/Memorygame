let firstCard = null;
let isFlipping = false;
let matchedPairs = 0;
const totalPairs = document.querySelectorAll('.kort').length / 2;
const messageElement = document.getElementById('You-win');

document.querySelectorAll('.kort').forEach(kort => {
  kort.addEventListener('click', function() {
    if (this.classList.contains('locked') || isFlipping) return;

    this.querySelector('.kort-backsida').classList.toggle('flip');

    if (!firstCard) {
      firstCard = this;
    } else {
      if (firstCard === this) return;
      
      isFlipping = true;

      if (firstCard.dataset.id !== this.dataset.id) {
        const currentCard = this;
        setTimeout(() => {
          firstCard.querySelector('.kort-backsida').classList.remove('flip');
          currentCard.querySelector('.kort-backsida').classList.remove('flip');
          firstCard = null;
          isFlipping = false;
        }, 1000);
      } else {
        firstCard.classList.add('locked');
        this.classList.add('locked');
        matchedPairs++;

        if (matchedPairs === totalPairs) {
          messageElement.innerText = "You win!";
        }

        firstCard = null;
        isFlipping = false;
      }
    }
  });
});

