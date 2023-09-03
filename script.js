document.getElementById('yesButton').addEventListener('click', function() {
  alert('¡Eres la persona más especial en mi vida! 😍');
});

const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', function() {
  moveButtonRandomly(noButton);
});

noButton.addEventListener('click', function() {
  moveButtonRandomly(noButton);
});

function moveButtonRandomly(button) {
  button.style.position = 'absolute';
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
