/**************************************************************
* @problem : To check if the parentheses are balanced or not.
* @param : Enter string
* @author : Pradnya D. S.
* returning parentheses are balanced or not balanced.
**************************************************************/

// class defined & exported to perform Operation

class Parentheses {
  parenthesesMatch(str) {
    let stack = [];
    let map = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        stack.push(str[i]);
      } else {
        let last = stack.pop();
        if (str[i] !== map[last]) {
          return false;
        }
      }
    }

    if (stack.length !== 0) {
      return "Parantheses are Not Balanced";
    }
    return "Parantheses are Balanced";
  }
}
module.exports = new Parentheses();
