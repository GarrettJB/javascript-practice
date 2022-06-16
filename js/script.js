//single line comment
/* Multi 
line 
comment */



// console.log("Garrett Barnard");
// console.log("Favorite food is pizza.");
// console.log("Supercalifragilisticexpialidocious".length); //figure out the length of a string
// let int = 123
// console.log(int);
// console.log(" ^  " + typeof int);
// let largenumber = 12346546564564563421234n*12342343241342366423432434324234234n;
// console.log(largenumber);
// console.log(" ^  " + typeof largenumber);




// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday





// let date = new Date("Aug 28, 2008");

// let pmonth = prompt("Please enter your birth month", "1-12");
// let month = parseInt(pmonth);
// month -= 1;

// let pyear = prompt("Please enter your birth year", "XXXX - format");
// let year = parseInt(pyear);

// let pday = prompt("Please enter your birth day", "1-31");
// let day = parseInt(pday);

// date.setDate(day);
// date.setMonth(month);
// date.setFullYear(year);
// alert(date);




// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

// let p1 = prompt("Please enter a number");
// let num1 = parseInt(p1);


// if (isNaN(num1) === true){
//     p1 = prompt("Please enter ONLY a number");
//     num1 = parseInt(p1);
// }

//  let p2 = prompt("Please enter another number");
//  let num2 = parseInt(p2);

//  if (isNaN(num2) === true){
//     p2 = prompt("Enter ONLY a number");
//     num2 = parseInt(p2);
// }


// if(num1 > num2){
//     alert(`${num1} is the larger number`)
// } else if(num1 < num2){
//     alert(`${num2} is the larger number`) 
// } else if (isNaN(num1) === true || isNaN(num2) === true){
//     alert(`im done with you. go back to kindergarden till you learn the difference between numbers and letters`)
// } else {
//     alert(`the numbers match`)
// }


// to check if number is odd or even
// function evenOrOdd (number){
//     if(number % 2 === 0) {
//       return alert("The number is even.");
//   }
//   else {
//      return alert("The number is odd.");
//   }
//   }
  
//   const num = prompt("Enter a number");
//   evenOrOdd(parseInt(num));

 
//   // to check if password is too long or short
//   function password (number){
//     if(number.length < 6 ) {
//       return alert("password is not accepted - too short");
//   }
//   else if( number.length > 19 ){ 
//      return alert("password is not accepted - too long");
//   } else {
//     return alert("password accepted!");
//   }
//   }
  
//   const num = prompt("Enter a password - must be between 6-20 characters");
//   password(num);


  
// fetch('https://cat-fact.herokuapp.com/facts/random').then(
//   response => {
//     return response.json();
//   }
// ).then(
//   body => {
//     alert(body.text)
//   }
// );


//Prints out fizzbuzz for every number thats divisible by 3 and 5, fizz by 3, and buzz by 5

// for(i=1; i<=100; i++){
  
//   if (i % 3 === 0 && i % 5 === 0){
//   console.log(i + " FizzBuzz");
//   } else if (i % 3 === 0 && !(i % 5 === 0)){
//     console.log(i + " Fizz");
    
//   }else if (i % 5 === 0 && !(i % 3 === 0)){
//     console.log(i + " Buzz");
//   } else {
//     console.log(i + "")
//   }
// }

// //Cleaner version:
// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     let out = '';
//     if (i % 3 === 0) out += 'Fizz';
//     if (i % 5 === 0) out += 'Buzz';
//     if (out.length === 0) out += i;
//     console.log(out);
//   }
// }

// fizzbuzz();

// let newElement = document.createElement('button');
// document.body.appendChild(newElement);
// newElement.innerHTML ='Press for Cat Fact';
// newElement.addEventListener("click", function (catfact){


//   fetch('https://cat-fact.herokuapp.com/facts/random').then(
//   response => {
//     return response.json();
//   }
// ).then(
//   body => {
//     alert(body.text)
//   }
// );
  
// })






// const dog = {
//   name: 'Shadow',
//   gender: 'male',
//   breed: 'Border Collie / Pit',
//   age: '1.5 Years old',
//   speak: function (){
//     alert('BORK!');
//   },
//   paw: function (){
//   alert('*daintily gives his left paw*');
//   }
// }

// dog.speak();


// for (let key in dog) {
//   console.log(key, dog[key]);
// }

// let newElement = document.createElement('p');
// document.body.appendChild(newElement);
// newElement.innerHTML = ('Name = ${dog}');
// newElement.addEventListener("click", function (catfact){


//   fetch('https://cat-fact.herokuapp.com/facts/random').then(
//   response => {
//     return response.json();
//   }
// ).then(
//   body => {
//     alert(body.text)
//   }
// );
  
// })




// const dog = {
//   Name: 'Shadow',
//   Gender: 'male',
//   Breed: 'Border Collie / Pit',
//   Age: '1.5 Years old',
//   Speak: function (){
//     alert('BORK!');
//   },
//   Paw: function (){
//   alert('*daintily gives his left paw*');
//   }
// }

// for (let key in dog) {

//  if(typeof dog[key] === 'function') {
//     let newElement = document.createElement('button');
//     document.body.appendChild(newElement);
//     newElement.innerHTML = `${key}`;
//     newElement.addEventListener("click", dog.[key])
//  } else {
//    let newElement = document.createElement('p');
//    document.body.appendChild(newElement);
//    newElement.innerHTML = (`${key} = ${dog[key]}`);
 
//  }
// }



// class Rectangle {
//   constructor(width, height, color, text, backgroundColor) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.text = text;
//     this.backgroundColor = backgroundColor;
//   }
  
//   area() {
//     return this.width * this.height;
//   }
  
//   perimeter() {
//     return this.width * 2 + this.height * 2;
//   }
  
//   renderDiv() {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     div.style.width = `${this.width}px`;
//     div.style.height = `${this.height}px`;
//     div.style.color = this.color;
//     div.style.backgroundColor = this.backgroundColor;
//     div.innerHTML = this.text;
//   }
// }

// const rect = new Rectangle(100, 50, 'red', 'TEST', 'blue');

// class Square extends Rectangle {
//   constructor(length, color, text, backgroundColor) {
//     super(length, length, color, text, backgroundColor);
//   }
  
//   perimeter() {
//     return this.width * 4;
//   }
// }

// const square = new Square(100, 'blue', 'Square', 'green');
// square.renderDiv();






// class Car {
//   constructor(year, make, model, color){
//     this.Year = year;
//     this.Make = make;
//     this.Model = model;
//     this.Color = color;
//   }
 
//  renderP(){
//    const p = document.createElement('p');
//    document.body.appendChild(p);
//    p.innerHTML = (`A ${this.Color} ${this.Year} ${this.Make} ${this.Model}`);
   
//  }
// }
// const car1 = new Car(2005, 'Toyota', 'Corolla', 'Grey');
// const car2 = new Car(2018, 'GMC', 'Acadia', 'Black');
// const car3 = new Car(2015, 'Ford', 'Mustang', 'Midnight Blue');
// const car4 = new Car(2007, 'Chevy', 'Cobalt', 'Silver');
// car1.renderP();
// car2.renderP();
// car3.renderP();
// car4.renderP();



document.forms.contact.addEventListener('submit', function(event){
  event.preventDefault();
  event.target.style.display = ('none');
    
  output.innerHTML = (`Name: ${event.target.Name.value}  Email: ${event.target.Email.value} \n\r Age:${event.target.Age.value}`);
  secret.innerHTML = (`${event.target.Secret.value}`);
  
  });
  
  const output = document.getElementById('output')
  const secret = document.getElementById('secret')