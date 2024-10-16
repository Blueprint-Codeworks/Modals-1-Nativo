// Modals
const openModal1 = document.getElementById('openModal1');
const closeModal1 = document.getElementById('closeModal1');
const modal1 = document.getElementById('modal1');

const openModal2 = document.getElementById('openModal2');
const closeModal2 = document.getElementById('closeModal2');
const modal2 = document.getElementById('modal2');

const openModal3 = document.getElementById('openModal3');
const closeModal3 = document.getElementById('closeModal3');
const modal3 = document.getElementById('modal3');

const openModal4 = document.getElementById('openModal4');
const closeModal4 = document.getElementById('closeModal4');
const modal4 = document.getElementById('modal4');

const openModal5 = document.getElementById('openModal5');
const closeModal5 = document.getElementById('closeModal5');
const modal5 = document.getElementById('modal5');

const openModal6 = document.getElementById('openModal6');
const closeModal6 = document.getElementById('closeModal6');
const modal6 = document.getElementById('modal6');

const openModal8 = document.getElementById('openModal8');
const closeModal8 = document.getElementById('closeModal8');
const modal8 = document.getElementById('modal8');

const openModal9 = document.getElementById('openModal9');
const closeModal9 = document.getElementById('closeModal9');
const modal9 = document.getElementById('modal9');

openModal1.addEventListener('click', () => {
    modal1.style.display = 'block';
    modal1.querySelector('.modal-content').classList.add('slide-in');
});

closeModal1.addEventListener('click', () => {
    modal1.style.display = 'none';
});

openModal2.addEventListener('click', () => {
    modal2.style.display = 'block';
    modal2.querySelector('.modal-content').classList.add('fade-in');
});

closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
});

openModal3.addEventListener('click', () => {
    modal3.style.display = 'block';
    modal3.querySelector('.modal-content').classList.add('bounce-in');
});

closeModal3.addEventListener('click', () => {
    modal3.style.display = 'none';
});

openModal4.addEventListener('click', () => {
    modal4.style.display = 'block';
    modal4.querySelector('.modal-content').classList.add('zoom-in');
});

closeModal4.addEventListener('click', () => {
    modal4.style.display = 'none';
});

openModal5.addEventListener('click', () => {
    modal5.style.display = 'block';
    modal5.querySelector('.modal-content').classList.add('flip-in');
});

closeModal5.addEventListener('click', () => {
    modal5.style.display = 'none';
});

openModal6.addEventListener('click', () => {
    modal6.style.display = 'block';
    modal6.querySelector('.modal-content').classList.add('shake-in');
});

closeModal6.addEventListener('click', () => {
    modal6.style.display = 'none';
});

openModal8.addEventListener('click', () => {
    modal8.style.display = 'block';
    modal8.querySelector('.modal-content').classList.add('fall-rotate');
});

closeModal8.addEventListener('click', () => {
    modal8.style.display = 'none';
});

openModal9.addEventListener('click', () => {
    modal9.style.display = 'block';
    modal9.querySelector('.modal-content').classList.add('fall-bounce');
});

closeModal9.addEventListener('click', () => {
    modal9.style.display = 'none';
});
