/*
You will be given a string and your task will be to return 
a list of ints detailing the count of uppercase letters, 
lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is: uppercase letters, lowercase, numbers and special characters.
*/


// Solution

const solve = x => {
  let u = x.match(/[A-Z]/g)||[];
  let d = x.match(/[a-z]/g)||[];
  let n = x.match(/[0-9]/g)||[];
  let s = x.match(/[^A-Z0-9]/gi)||[];
  return [u.length, d.length, n.length, s.length]
}

// or

const solveArray = (string) => (
  Object.values([...string].reduce((acc, char) => {
    if (/[A-Z]/.test(char)) {
      acc.upper++;
    } else if (/[a-z]/.test(char)) {
      acc.lower++;
    } else if (/[0-9]/.test(char)) {
      acc.number++;
    } else {
      acc.other++;
    }
    return acc;
  }, {  upper: 0, lower: 0, number: 0, other: 0 }))
)

// or

const solveArr = (s) => {
  let result = [0, 0, 0, 0];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].toLowerCase() > s[i]) {
      result[0] += 1;
    } else if (s[i].toUpperCase() < s[i]) {
      result[1] += 1;
    } else if (s[i] >= 0 && s[i] <= 9) {
      result[2] += 1;
    } else {
      result[3] += 1;
    }
  }
  return result;
};