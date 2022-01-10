/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here 

const truncate = (str, numWords) => str.split(" ").slice(0, numWords).join(" ");



console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"


/* 2. Write a JavaScript function to alphabetize a given string. */

// write your code here 

const alphabetize_string = str => str.split("").sort().join("");

console.log(alphabetize_string("United States"));
//"SUadeeinsttt"

//  3. Write a JavaScript function to convert ASCII to Hexadecimal format.


// write your code here 

/* const ascii_to_hexa = str => {
  let ascii = str.split("").map(item => item.charCodeAt());
  let hexa = ascii.map(item => item.toString(16)).join('');

  return hexa;
} */

const ascii_to_hexa = str => str.split("").map(item => item.charCodeAt().toString(16)).join('');


console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030 

//  4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r


// write your code here 

const humanize = num => {
  let myNum = num.toString();
  let lastNum = myNum.slice(-1);

  return lastNum === '0' ? num + "th" : lastNum === '1' ? num + "st" : lastNum === '2' ? num + "nd" : lastNum === '3' ? num + "rd" : num + "th";
}

console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"


/* 5. Write a JavaScript function to get the successor of a string. */

// write your code here 


/* 6. Write a JavaScript function to sort the following array of objects by title value. */

// write your code here 

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];


const sortObjArr = arr => arr.sort((first, second) => first.title < second.title ? -1 : 1);


sortObjArr(library);
console.log(library);


/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

// write your code here 

function num_string_range(letter1, letter2, bounds) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let nums = "0123456789"
  const firstInd = alphabet.indexOf(letter1);
  const secondInd = alphabet.indexOf(letter2);

  const numInd = nums.indexOf(letter1);
  const numInd2 = nums.indexOf(letter2);

  if (isNaN(letter1) === true)
    return alphabet.split("").slice(firstInd, secondInd).filter((item, index) => index % bounds === 0);
  else {
    return nums.split("").slice(numInd, numInd2).filter((item, index) => index % bounds === 0);
  }

}


console.log(num_string_range("a", "z", 2));
console.log(num_string_range("0", "9", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


/* 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second. */

// write your code here 
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = 0;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
//clock.start();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
 */

// write your code here 

const all_properties = obj => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === "function");




console.log(all_properties(Array));
// // ["isArray", "from", "of"]
console.log(all_properties(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]


/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */


// write your code here 
const all_properties2 = obj => Object.getOwnPropertyNames(obj);

console.log(all_properties2(Math));
// ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties2(Array));
// ["length", "name", "prototype", "isArray", "from", "of"]



function successor(str) {
  let char = str.slice(-1).charCodeAt(0);
  let myArr = str.split("");

  if (char < 48)

    if (char !== 122 && char !== 57) {
      myArr.pop();
      myArr.push(String.fromCharCode(char + 1));
      return myArr.join("")
    }


  for (let i = myArr.length - 1; i >= 0; --i) {
    if (myArr[i].charCodeAt(0) === 122) {
      myArr.splice(i, 1, "a");
    } else if (myArr[i].charCodeAt(0) === 57) {
      myArr.splice(i, 1, "0");
    } else if (myArr[i].charCodeAt(0) === 90) {
      myArr.splice(i, 1, "A")
    }
  }

  if (str[1] !== myArr[1]) {
    myArr[0] = String.fromCharCode(myArr[0].charCodeAt(0) + 1)
  }

  return myArr.join("")

}

console.log(String.fromCharCode(122));
console.log("A".charCodeAt(0));

console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"