/*
If one string contains the same letters and same amount of letters, it is an anagram.

For example:
 race
 care

Both strings have the same letters, both have the same quantity of those letters.

Write a function that counts how many letters need to be removed from each string in order to make the strings an anagram
*/
const delToGetAnagram = (str1, str2) => {
  let result = 0;
  let count = 0;
  let removeFromOneString = 0;
  let mapStr1 = {};
  let mapStr2 = {};

  for (let i = 0; i < str1.length; i++) {
    mapStr1[str1[i]] = mapStr1[str1[i]] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    mapStr2[str2[i]] = mapStr2[str2[i]] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let s1 = mapStr1[str1[i]];
    let s2 = mapStr2[str2[i]];
    let letter1 = str1[i];
    let letter2 = str2[i];
    console.log(
      `s1: ${s1}  letter1: ${letter1}, s2: ${s2}  letter2:  ${letter2}`
    );
    // if the character in str2 doesn't exist in the mapStr1 of str1, increase count by 1
    if (!mapStr1[str2[i]]) {
      count++;
    }
    // if character exists in mapStr1 of str1, check to see if the quantity is the same
    if (letter1 === letter2) {
      console.log('LETTERS MATCH');
      console.log(`letter1: ${letter1}, letter2: ${letter2}`);
      console.log(`s1: ${s1}, s2: ${s2}`);
      if (s1 !== s2) {
        removeFromOneString++;
      }
    }
  }

  result = count * 2;
  console.log('count:', count);
  console.log('mapStr1', mapStr1);
  console.log('mapStr2', mapStr2);
  return result + removeFromOneString;
};

// console.log(delToGetAnagram("abe", "dce")); // expected 4
// console.log(delToGetAnagram("abexv", "dcerv")); // expected 6
// console.log(delToGetAnagram("abexvyy", "dcervyy")); // expected 6
console.log(delToGetAnagram('abexvyy', 'dcervy')); // expected 7

/*
"s1: 1  letter1: a, s2: 1  letter2:  d"
"s1: 1  letter1: b, s2: 1  letter2:  c"
"s1: 1  letter1: e, s2: 1  letter2:  e"
"LETTERS MATCH"
"letter1: e, letter2: e"
"s1: 1, s2: 1"
"s1: 1  letter1: x, s2: 1  letter2:  r"
"s1: 1  letter1: v, s2: 1  letter2:  v"
"LETTERS MATCH"
"letter1: v, letter2: v"
"s1: 1, s2: 1"
"s1: 2  letter1: y, s2: 1  letter2:  y"
"LETTERS MATCH"
"letter1: y, letter2: y"
"s1: 2, s2: 1"
"count:" 3
"mapStr1" // [object Object]
{
  "a": 1,
  "b": 1,
  "e": 1,
  "x": 1,
  "v": 1,
  "y": 2
}
"mapStr2" // [object Object]
{
  "d": 1,
  "c": 1,
  "e": 1,
  "r": 1,
  "v": 1,
  "y": 1
}
7
*/
