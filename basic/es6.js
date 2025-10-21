// let name="korea";
// let num=7;

// let object = {name, num};
// console.log(object);

// object = {nameValue: "coding", numValue: 13};
// let {nameValue, numValue} = object;
// console.log(nameValue, numValue); //key와 변수명이 같아야 한다.

// let array = [1,2,3];
// let [a, b, c] = array;
// console.log(a, b, c);

// let [d, ...rest] = array;
// console.log(rest);

// let animal = {
//   species : "dog",
//   age : 7,
//   cute : true
// }

// let {species, ...other} = animal;
// console.log(other);


//1
let name = "noona's fruit store";
let fruits = ["banana", "apple", "mango"];
let address = "Seoul";

let store = {name, fruits, address};
console.log(store);
console.log();

//2
console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 에 있습니다.`);
console.log();

//3
function calculate({a, b, c}){
  return a + b + c;
}
let result = calculate({a:1, b:2, c:3});
console.log("result:", result);
console.log();

//4
name = "noona store";
address = {
  country : "Korea",
  city : "Seoul"
}
function findStore(obj){
  let {name, address:{city}} = obj;
  return name === "noona store" && city === "Seoul";
}
console.log(findStore({name, fruits, address}));
console.log();

//5
function getNumber() {
  let array = [1,2,3,4,5,6];
  let [first, ,third, forth] = array;
  return {first, third, forth};
}
console.log(getNumber());
console.log();

//6
function getCalendar(first, ...rest){
  return (
    first === "January" &&
    rest[0] === "Febuary" &&
    rest[1] === "March" &&
    rest[2] === undefined
  );
}
console.log(getCalendar("January", "Febuary", "March"));
console.log();

//7
function getMinumum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b);
}
console.log(getMinumum());
console.log();

//8
function sumNumber(){
  const sum = (a, b)=>a+b;
  return sum(40, 10);
}
console.log(sumNumber());
console.log();

//9
function sumNumber() {
  let addNumber = (a)=>(b)=>(c)=>a+b+c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber());
console.log();