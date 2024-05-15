'use strict';
// Створи слайдер за допомогою ES6 класу
// Під час ініціалізації екземпляра класу він має приймати
// 1 Посилання на контейнер в середині якого буде генеруватись слайдер
// 2 Масив з посиланнями на зображення які потрібно відмалювати
// Слайдер має мати кнопки для навігації "Вперед" "Назад"
// Слайдер має показувати на якому ми зображені з загальної кількості зображень ми знаходимось


const cats = ['https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200'];


const dogs = [
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0YjBdCutn-40_tt7BXzOiOWOy8dcft_Ds_E30GTZIg&s',
 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg',
 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg'
]


class Slider {


 #currentIndex;
 #imgRef;
 #currentNumber;


 constructor (container, array){
   this.container = container;
   this.array = array;
   this.#currentIndex = 0;
 }


 init () {
   if (! Array.isArray(this.array) || !this.array.length){
     alert("You must give me arry img!");
    return;
   }
   const html = `<ul class="slider-container">
   <li class="js-before"> &larr; </li>
   <li><img class="js-preview" src="${this.array[this.#currentIndex]}"></li>
   <li class="js-after"> &rarr; </li></ul>
   <h3 class="js-new-number">You watch ${this.#currentIndex + 1} with ${this.array.length}</h3>`;
   this.container.insertAdjacentHTML('afterbegin',html);
   this.#assingEvents();
 }


 #clickBefore (){
   if (this.#currentIndex === 0){
     this.#currentIndex = this.array.length - 1;
   } else {
     this.#currentIndex--;
   }
   this.#updateImg();
 }


 #clickAfter (){
   if (this.#currentIndex === this.array.length - 1){
     this.#currentIndex = 0;
   } else {
     this.#currentIndex++;
   }
   this.#updateImg();
 }


 #assingEvents (){
   const befores = document.querySelector(".js-before");
   const afrets = document.querySelector(".js-after");
   const img = document.querySelector(".js-preview");
   const number = document.querySelector('.js-new-number');
   this.#currentNumber = number;
   this.#imgRef = img;
   befores.addEventListener('click', this.#clickBefore.bind(this));
   afrets.addEventListener('click', this.#clickAfter.bind(this));
 }


 #updateImg (){
   this.#imgRef.src = this.array[this.#currentIndex];
   this.#currentNumber.textContent = ` You watch ${this.#currentIndex + 1} with ${this.array.length}`;
 }


 refresh (array) {
   this.array = array;
   this.#currentIndex = 0;
   this.#updateImg();
 }
}
const res = document.querySelector(".js-slider");
const slider = new Slider(res, cats);
slider.init();
setTimeout(() => {
 slider.refresh(dogs);
}, 4000);



