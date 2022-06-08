
function palindrome(str) {
  let re = /[\W_]/g;
  str = str.toLowerCase().replace(re, "");
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("this is not"));