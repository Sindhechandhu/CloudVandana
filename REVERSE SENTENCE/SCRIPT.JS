function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(`Reversed string is : ${reverseString('This is a sunny day')}`)
  