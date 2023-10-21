//Exercise 1: Repeating String Checker
function isRepeatedString(str) {
  // Your code here
  let subStr = "";
  let endIndex = 0;

  let firstLetter = str[0];

  for (let i = 0; i < str.length; i++) {
    if (firstLetter === str.charAt(i + 1)) {
      endIndex = i + 1;
      // console.log(endIndex);
      break;
    }
  }
//   console.log(endIndex);
  if (!endIndex) {
    return false;
  }
  subStr = str.slice(0, endIndex);
  // console.log(subStr);
  let arr = [];
  let numOfSubstr = str.length / subStr.length;
  // const repeat = (subStr, numOfSubstr) => {
  for (let j = 0; j < numOfSubstr - 1; j++) {
    arr.push(subStr);
  }
  arr.push(subStr);
  // console.log(arr);
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] === arr[n + 1]) {
      return true;
    }
  }
}

// Exercise 2: String Compression
function compressString(str) {
  // Your code here
  let result = "";
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num++;
    } else {
      result += str[i] + num;
    }
  }

  // console.log()
  return result;
}
// Exercise 5: Palindrome Checker
function isPalindrome(str) {
  // Your code here
  let val1 = str.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  let val2 = "";

  for (let j = val1.length - 1; j >= 0; j--) {
    val2 += val1[j];
  }

  return val1 === val2;
}
// Exercise 6: Anagram Checker
function areAnagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i])) {
      str1.replace(str1[i], "");
      str2.replace(str1[i], "");
      console.log(str1.replace(str1[i], ""));
    } else {
      return false;
    }
    // console.log(str1);
    // console.log(str2);
  }
  return true;
}


// Test cases
console.log(isRepeatedString("abcabcabc")); // Expected: true
console.log(compressString("aabcccccaaa")); // Expected: "a2b1c5a3"
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Expected: true
console.log(areAnagrams("listen", "silent"), "ana"); // Expected: true
