const input = require('readline-sync');
let str = "LaunchCode";

console.log(str.slice(0).slice(1).slice(2));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

console.log(`The phrase was changed from, ${str} to ${}`)
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

function reWrite {
    newStr = input("Choose three new letters. ")
    if (newStr.length === 3){
        console.log(str.unshift(newStr));
    }

    else {
        console.log("Input Error")
    }

}



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
