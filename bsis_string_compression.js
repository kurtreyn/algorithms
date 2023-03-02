// ======================================================
// ******* SECOND PROBLEM (got answer for this)*******
// ======================================================
/*
I didn't use the method below to get an answer on this one. During the interview I used a hash map to get the amount of each characters.
*/
const compression = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    console.log(`----START FOR LOOP----`);
    let char = str[i];
    let count = 1;
    console.log(`i in FOR LOOP: ${i}, char: ${char}`);
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      console.log(`----START WHILE LOOP----`);
      console.log(`i in WHILE LOOP: ${i}, char: ${char}`);
      console.log(`count: ${count}, char: ${char}`);
      count++;
      i++;
      console.log(`----END WHILE LOOP----`);
    }

    if (count === 1) {
      result += char;
    } else {
      result += char + count;
    }
    console.log(`----END FOR LOOP----`);
  }

  return result;
};

console.log(compression("aaaabbbcccd")); // expected: a4b3c2d


/*
"----START FOR LOOP----"
"i in FOR LOOP: 0, char: a"
"----START WHILE LOOP----"
"i in WHILE LOOP: 0, char: a"
"count: 1, char: a"
"----END WHILE LOOP----"
"----START WHILE LOOP----"
"i in WHILE LOOP: 1, char: a"
"count: 2, char: a"
"----END WHILE LOOP----"
"----START WHILE LOOP----"
"i in WHILE LOOP: 2, char: a"
"count: 3, char: a"
"----END WHILE LOOP----"
"----END FOR LOOP----"
"----START FOR LOOP----"
"i in FOR LOOP: 4, char: b"
"----START WHILE LOOP----"
"i in WHILE LOOP: 4, char: b"
"count: 1, char: b"
"----END WHILE LOOP----"
"----START WHILE LOOP----"
"i in WHILE LOOP: 5, char: b"
"count: 2, char: b"
"----END WHILE LOOP----"
"----END FOR LOOP----"
"----START FOR LOOP----"
"i in FOR LOOP: 7, char: c"
"----START WHILE LOOP----"
"i in WHILE LOOP: 7, char: c"
"count: 1, char: c"
"----END WHILE LOOP----"
"----START WHILE LOOP----"
"i in WHILE LOOP: 8, char: c"
"count: 2, char: c"
"----END WHILE LOOP----"
"----END FOR LOOP----"
"----START FOR LOOP----"
"i in FOR LOOP: 10, char: d"
"----END FOR LOOP----"
"a4b3c3d"
*/
