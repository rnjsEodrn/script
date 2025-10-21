let nums = [1,2,3,4,5,6,7,8,9,10];

function printNum(num){
  console.log(num);
}
nums.forEach(printNum);

nums.forEach((num)=>console.log(num));
console.log();

let nums10 = nums.map((num, index)=>{
  console.log(index);
  return 10 + num;
})
console.log(nums10);
console.log();

let numsFilter = nums.filter((num)=>num%2==0);
console.log(numsFilter);
console.log();

let some = nums.some((num)=>num<5);
console.log(some);
console.log();

let every = nums.every((num)=>num<5);
console.log(every);
console.log();

let find = nums.find((num)=>num%4==0);
console.log(find);
console.log();

let findIndex = nums.findIndex((num)=>num%4==0);
console.log(findIndex);
console.log();

let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

//map
let UpperNames = names.map((name) => name.toUpperCase());
let firstNames = names.map((name) => name.split(" ")[0]);
let initial = names.map((name) => {
  let token = name.split(" ");
  let result = "";
  token.forEach((item) => result+=item[0]);
  return result;
})
console.log(UpperNames);
console.log(firstNames);
console.log(initial);
console.log();

//filter
console.log(names.filter((name) => name.includes('a')));
console.log(names.filter((name) => {
  let token = name.split("");
  return token.some((char, index) => char === token[index + 1]);
}))
console.log();

//some
console.log(names.some((name) => name.length >= 20));
console.log(names.some((name) => {
  let lowerCase = name.toLowerCase();
  let index = lowerCase.lastIndexOf(" ");
  return lowerCase.slice(0, index).includes('p');
}));
console.log();

//every
console.log(names.every((name) => name.length >= 20));
console.log(names.every((name) => name.includes('a')));
console.log();

//find
console.log(names.find((name) => name.length >= 20));
console.log(names.find((name) => name.split(" ").length >= 3));

//flindIndex
console.log(names.findIndex((name) => name.length >= 20));
console.log(names.findIndex((name) => name.split(" ").length >= 3));


