// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {



  var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  var sChars = ["@", "$", "!", "(", "^", "<", ">", "?", "/"]
  var emojis = ["😢", "💕", "🥺", "😉", "🥱", "😍", "😒"]

  var possibles = []

  var length = parseInt(prompt("how long does this password need to be ?"))

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Not going to happen, refresh the page")
  } else {

    var charsTrue = confirm("Do you want chars?");
    var numsTrue = confirm("Do you want nums?");
    var sCharsTrue = confirm("Do you want special chars?");
    var emojisTrue = confirm("Do you want emojs?");

    for (var i = 0; i < length; i++) {
      if (charsTrue) {
        var randomElement = chars[Math.floor(Math.random() * chars.length)]
        possibles.push(randomElement)
      }
      if (numsTrue) {
        var randomElement = nums[Math.floor(Math.random() * nums.length)]
        possibles.push(randomElement)
      }

      if (sCharsTrue) {
        var randomElement = sChars[Math.floor(Math.random() * sChars.length)]
        possibles.push(randomElement)
      }

      if (emojisTrue) {
        var randomElement = emojis[Math.floor(Math.random() * emojis.length)]
        possibles.push(randomElement)
      }

      console.log(possibles)

    } //for loop ends
    var newPassword = possibles.slice(0, length).join("");

    return newPassword = possibles.slice(0, length).join("");

    


  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
