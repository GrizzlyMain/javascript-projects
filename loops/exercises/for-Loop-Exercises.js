/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line. 
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

     
for (let i = 1; i < 21; i++){
     console.log(i);
  
}

for (let n = 3; n < 30; n += 2){
  console.log(n);
}


for (let k = 12; k >= -14; k -= 2){
  console.log(k);
}

for (let s = 50; s >= 20; s--) {
  if (s % 3 === 0) {
    console.log(s);
  }
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let name = 'LaunchCode';
let arr =[1, 5, 'LC101', 'blue', 42];

let reverse = ''

for (let q = 0; q < arr.length; q++){
  console.log(arr[q]);
}

for (let t = name.length; t >= 0; t--){
  reverse = name[t];
  console.log(reverse);
}









/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */