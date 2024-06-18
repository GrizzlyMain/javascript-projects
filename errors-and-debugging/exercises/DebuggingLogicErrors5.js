let launchReady = false;
let crewReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}
console.log("crewReady = ", crewReady);

if (launchReady && crewReady){
   console.log(10);
   console.log(9);
   console.log(8);
   console.log(7);
   console.log(6);
   console.log(5);
   console.log(4);
   console.log(3);
   console.log(2);
   console.log(1);
   console.log('Liftoff!')
}
else {
   console.log ('Launch scrubbed!');
}