// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfSpaceShuttle = "GritandGrind1"
let shuttleSpeed = 17500
let distanceToMars = 225000000
let distanceToMoon = 384400
const milesPerKm = .621

console.log (nameOfSpaceShuttle);
console.log(shuttleSpeed);
console.log (distanceToMars);
console.log (distanceToMoon);
console.log (milesPerKm);

let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
console.log (nameOfSpaceShuttle + " will take " + daysToMars + " days to reach Mars.");