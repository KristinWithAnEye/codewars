// CHALLENGE DESCRIPTION
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// MY SOLUTION
function boolToWord(bool) {
    if (bool) {
      return "Yes";
    } else {
      return "No";
    }
} 

// OTHER SOLUTION
const boolToWord = bool => bool ? "Yes" : "No";