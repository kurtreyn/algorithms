// ======================================================
// ******* FIRST PROBLEM (didn't get answer for this) *******
// ======================================================
/*
I wasn't able to get an answer for this during the interview. The solution below is one I came up with after the interview.
*/
const S1 = "apprentice";
const S2 = "price";

function stringPattern(a, b) {
  let iA = 0;
  let iB = 0;
  const arr = [];
  const map = new Map();

  for (let i = 0; i < b.length; i++) {
    map.set(b[i], i);
  }

  while (iB < b.length) {
    console.log(`iA: ${iA}, a: ${a[iA]} | iB: ${iB}, b: ${b[iB]}`);
    if (a[iA] !== b[iB]) {
      iA++;
    } else {
      console.log("pushing:", a[iA]);
      arr.push(a[iA]);
      iA++;
    }
    if (iA > a.length - 1) {
      iA = 0;
      iB++;
    }
  }
  console.log("arr:", arr);

  for (let i = 0; i < a.length; i++) {
    if (map.get(a[i]) === undefined) {
      arr.push(a[i]);
    }
  }

  console.log("arr:", arr);

  return arr.join("");
}

console.log(stringPattern(S1, S2)); //expected return "ppriceeant"

/*
"iA: 0, a: a | iB: 0, b: p"
"iA: 1, a: p | iB: 0, b: p"
"pushing:" "p"
"iA: 2, a: p | iB: 0, b: p"
"pushing:" "p"
"iA: 3, a: r | iB: 0, b: p"
"iA: 4, a: e | iB: 0, b: p"
"iA: 5, a: n | iB: 0, b: p"
"iA: 6, a: t | iB: 0, b: p"
"iA: 7, a: i | iB: 0, b: p"
"iA: 8, a: c | iB: 0, b: p"
"iA: 9, a: e | iB: 0, b: p"
"iA: 0, a: a | iB: 1, b: r"
"iA: 1, a: p | iB: 1, b: r"
"iA: 2, a: p | iB: 1, b: r"
"iA: 3, a: r | iB: 1, b: r"
"pushing:" "r"
"iA: 4, a: e | iB: 1, b: r"
"iA: 5, a: n | iB: 1, b: r"
"iA: 6, a: t | iB: 1, b: r"
"iA: 7, a: i | iB: 1, b: r"
"iA: 8, a: c | iB: 1, b: r"
"iA: 9, a: e | iB: 1, b: r"
"iA: 0, a: a | iB: 2, b: i"
"iA: 1, a: p | iB: 2, b: i"
"iA: 2, a: p | iB: 2, b: i"
"iA: 3, a: r | iB: 2, b: i"
"iA: 4, a: e | iB: 2, b: i"
"iA: 5, a: n | iB: 2, b: i"
"iA: 6, a: t | iB: 2, b: i"
"iA: 7, a: i | iB: 2, b: i"
"pushing:" "i"
"iA: 8, a: c | iB: 2, b: i"
"iA: 9, a: e | iB: 2, b: i"
"iA: 0, a: a | iB: 3, b: c"
"iA: 1, a: p | iB: 3, b: c"
"iA: 2, a: p | iB: 3, b: c"
"iA: 3, a: r | iB: 3, b: c"
"iA: 4, a: e | iB: 3, b: c"
"iA: 5, a: n | iB: 3, b: c"
"iA: 6, a: t | iB: 3, b: c"
"iA: 7, a: i | iB: 3, b: c"
"iA: 8, a: c | iB: 3, b: c"
"pushing:" "c"
"iA: 9, a: e | iB: 3, b: c"
"iA: 0, a: a | iB: 4, b: e"
"iA: 1, a: p | iB: 4, b: e"
"iA: 2, a: p | iB: 4, b: e"
"iA: 3, a: r | iB: 4, b: e"
"iA: 4, a: e | iB: 4, b: e"
"pushing:" "e"
"iA: 5, a: n | iB: 4, b: e"
"iA: 6, a: t | iB: 4, b: e"
"iA: 7, a: i | iB: 4, b: e"
"iA: 8, a: c | iB: 4, b: e"
"iA: 9, a: e | iB: 4, b: e"
"pushing:" "e"
"arr:" // [object Array] (7)
["p","p","r","i","c","e","e"]
"arr:" // [object Array] (10)
["p","p","r","i","c","e","e","a","n","t"]
"ppriceeant"
*/
