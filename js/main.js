// function split(text) {
//     let words = [];
//     let tempWord = "";
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] !== " " || i !== text.length - 1)
//             tempWord += text[i];
//         if (text[i] === " " || i >= text.length - 1) {
//             words.push(tempWord.trim());
//             tempWord = ""
//         }
//     }
//     return words;
// }

// function maxEl(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max.length < arr[i].length) max = arr[i];
//     }
//     return max
// }

// const splitted = split("Xush kelibsiz O'zbekistonga")
// const result = maxEl(splitted)
// console.log(result)

// const arr = [12, 31, 4, 1];

// function sum(arr) {
//     let s = 0;
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i];
//     }
//     return s
// }

// console.log(sum(arr));



// var age = 30;
// // 0x0001

// var oldAge = 12;
// // 0x0002

// var me = {
//     name: "Alice",
//     age: 18
// }
// // 0x0003 D30F


// var friend = me;
// // 0x0004 D30F

// friend.age = 0;
// console.log(me);
// console.log(friend);

// const obj = {}

// // obj = "Hello"

// obj.name = "Hello World";
// obj.name = "Hello Uzbekistan";
// // A24U
// const user = {
//     "ismi va familiyasi": "Falonchiyev Falonchi",
//     ismi: "Alien"
// }
// user['ismi'] = "John";
// user['ismi va familiyasi'] = "John Doe";

// console.log(user)

// const car = {
//     model: "BMW E20",
//     motorInfo: {
//         HP: "2.4L",
//         timePer100Km: '4s'
//     },
//     go: function () {
//         console.log("Yuryapman")
//     },

//     sayModel() {
//         console.log(`My model is ${this.model}`);
//     }
// }

// car.go()
// car.sayModel()

// const obj = {
//     firstname: "Alexandr",
//     lastname: "Nikolayev",
//     age: 45,
//     isMarried: true
// }

// Object.defineProperty(obj, 'fullname', {
//     value: obj.firstname + " " + obj.lastname,
//     configurable: false,
//     writable: true
// })


// obj.fullname = "salom"
// delete obj.fullname
// console.log(obj)


// const freezedObj = Object.freeze(obj)
// freezedObj.age = 4;
// freezedObj.firstname = 4;
// console.log(freezedObj)

// function handleTimer() {
//     console.log("Funksiya ishladi");
// }

// setTimeout(handleTimer, 1000);
// console.log("Timer ishini tugatdi");

// setInterval(function () {
//     console.log("second")
// }, 1000)


// let count = 0;

// const timer1 = setInterval(function () {
//     console.log(count + " marta ishladi")
//     count++;
//     if (count === 10) clearInterval(timer1)
// }, 1000)


// var inputEl = document.querySelector(".number-input");
// var maskEl = document.querySelector(".number-mask")


// inputEl.addEventListener('keyup', () => {
//     maskEl.textContent = inputEl.value.padEnd(9, '*')
// })
// var text = "9987112";


// console.log(text.padEnd(9, "*"))

{/* <div class="col-4">
    <div class="card">
        <div class="card-header">
            <h4>Title</h4>
        </div>
        <div class="card-body">
            lorem
        </div>
    </div>
</div>
 */}
// movies

var moviesList = document.querySelector('.movies-list');

function createMovieEl(movie) {
    let colEl = document.createElement('div');
    colEl.className = 'col-lg-4 col-md-6 col-sm-12';

    let cardEl = document.createElement('div');
    cardEl.className = 'card'

    let cardHeader = document.createElement('div')
    cardHeader.className = 'card-header';

    let cardTitle = document.createElement('h4');
    cardTitle.textContent = movie.title;


    let cardBody = document.createElement('div')
    cardBody.className = 'card-body';
    cardBody.textContent = movie.description;

    cardHeader.appendChild(cardTitle);
    cardEl.appendChild(cardHeader)
    cardEl.appendChild(cardBody)

    colEl.appendChild(cardEl);

    return colEl
}

renderMovies(movies)
// moviesList.innerHTML = null;

function renderMovies(movies) {
    moviesList.innerHTML = null;

    for (let i = 0; i < movies.length; i++) {
        let singleMovieEl = createMovieEl(movies[i]);
        moviesList.appendChild(singleMovieEl);
    }
}
