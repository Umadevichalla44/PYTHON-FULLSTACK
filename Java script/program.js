//write ajs program to get the count of vowels in the given string
let s = "I love python";
count = 0;

for (let i = 0; i < s.length; i++) {
  let ch = s[i].toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log(s[i]);
    count++;
  }
}
console.log("count is :", count);

//wrire a program to find give character is digit or alphabet or symbol
let ch = "0";

if (ch.lengthn != 1) {
  console.log("Please give only single character ");
} else {
  let a = ch.charCodeAt();

  if (ascii >= 65 && ascii <= 90 && ascii >= 97 && ascii <= 122) {
    console.log("Alphabet");
  } else if (ascii >= 48 && ascii <= 57) {
    console.log("Digit");
  } else {
    console.log("Special Symbol");
  }
}

//write a program to find the functin
function addition(x, y) {
  let res = x + y;
  return res;
}

let ans = addition(10, 20);
console.log("Addition: ", ans);

// arrow Function
let anse = (x, y) => {
  let resu = square(x) + square(y);
  return resu;
};
// single line arrow function
let square = (z) => z ** 2;

console.log(anse(5, 2));
