/*****************************************************************
*@problem: To check parentheses must appear in a balanced manner.
*@author : Pradnya D. S.
*In this file we give input as string
/*****************************************************************/

//parentheses.js file is imported

let readlineSync = require('readLine-Sync');
let parentheses = require('./Parentheses.js');
let str = readlineSync.question("Enter your input : \n");
console.log(parentheses.parenthesesMatch(str));
