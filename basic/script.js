let a = 1;
let b = 2;
console.log(a, b); // 1,2

let temp = a;
a = b;
b = temp;
console.log(a, b);

// 코드 후에
[a, b] = [b, a];
console.log(a, b); // 2,1

console.log(1/0);
console.log(7.5%2);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");

let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

//list 1
animals.pop();
console.log(animals);

//list 2
animals.push("Dog");
console.log(animals);

//list 3
animals.push("Mosquito");
animals.push("Mouse");
animals.push("Mule");
console.log(animals);

//list 4
console.log(animals.includes("Human"));

//list 5
console.log(animals.includes("Cat"));

//list 6
animals[animals.indexOf("Red deer")] = "Deer";
console.log(animals);

//list 7
animals.splice(animals.indexOf("Spider"), 3);
console.log(animals);

//list 8
animals.splice(animals.indexOf("Tiger"));
console.log(animals);

//list 9
let bnimals = animals.slice(animals.indexOf("Baboon"), animals.indexOf("Bison") + 1);
console.log(bnimals);

//if 1
let num = 13;
if(num == 0){
  console.log("0입니다.");
} else if(num > 0){
  console.log("양수입니다.");
} else{
  console.log("음수입니다.");
}

//if 2
let score = 79;
if(90 <= score && score <= 100){
  console.log("A");
} else if(80 <= score){
  console.log("B");
} else if(70 <= score){
  console.log("C");
} else if(60 <= score){
  console.log("D");
} else{
  console.log("F");
}

//if 3
let skills =  ["HTML", "CSS", "Javascript", "React"];
let includeJs = skills.includes("Javascript");
let includeReact = skills.includes("React");
if(includeJs && includeReact){
  console.log("합격");
} else if(!includeJs && !includeReact){
  console.log("탈락");
} else{
  console.log("예비");
}

//for 1
let number = 0;
for(let i = 1; i <= 100; i++){
  number += i;
}
console.log("1+...+100=", number);

//for 2
for (let i = 1; i < 100; i+=2) {
  console.log(i);
}
console.log();

//for 3
let list369 = ["3", "6", "9"];
for (let i = 1; i <= 50; i++) {
  let num = i.toString();
  let result = "";
  for (let char of num) {
    if(list369.includes(char)){
      result += "짝";
    }
  }
  console.log((result.length == 0) ? i : result);
  
}
console.log();

//for 4
for(let number2 = 1; number2 <= 100; number2++){
  let result = true;
  for(let i = 2; i <= Math.sqrt(number2); i++){
    if(number2 % i == 0){
      result = false;
      break;
    }
  }
  if(number2 == 1){
    result = false;
  }
  console.log(number2, result);
}

//function 1
function greet(name){
  console.log(`안녕 내 이름은 ${name}야`);
  return name;
}
let name = greet("에밀리");
console.log(name);
console.log();

//function 2
function meetAt(year, month, day){
  return day ? `${year}/${month}/${day}` : (month ? `${year}년 ${month}월` : `${year}년`); 
}
console.log(meetAt(1234));
console.log(meetAt(1234, 5));
console.log(meetAt(1234, 5 ,6));
console.log();

//function 3
function findSmallestElement(arr){
  if(arr.length == 0){
    return 0;
  }

  //return Math.min(...arr);
  let min = arr[0];
  for (let num of arr) {
    if(num < min){
      min = num;
    }
  }
  return min;
}
console.log(findSmallestElement([100, 200, 3, 2, 1]));
console.log(findSmallestElement([]));
console.log();

//function 4
function leastOfMoney(amount){
  let moneys = [50000, 10000, 5000, 1000, 500, 100];
  for (let money of moneys) {
    let count = parseInt(amount / money);
    console.log(`${money} X ${count}`);
    amount = amount % money;
  }
}
leastOfMoney(12300);

