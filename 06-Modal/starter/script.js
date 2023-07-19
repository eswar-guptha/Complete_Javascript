'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');

let btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  // console.log('closed');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
