// Declare and initialize the variables for exercise 1 here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'Ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 800000;  
let shuttleMassKg = 74842.31;
let fuelLevel = '100%';
let weatherStatus = 'Clear';
let preparedForLiftOff = 'true';
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;








if (astronautCount <= 7 && astronautStatus === 'Ready' && totalMassKg < maximumMassLimit 
&& fuelTempCelsius >= -300 && fuelTempCelsius <= -150 && fuelLevel === '100%' && weatherStatus === 'Clear'){
 console.log('All systems are a go!Initiating space shuttle launch sequence.');
 console.log ('-------------------------------------------------------------------------------------------------------------------------------------');
 console.log("Date:", date);
 console.log("Time:", time);
 console.log("Astronaut Count:", astronautCount);
 console.log("Astronaut Status:", astronautStatus);
 console.log("Average Astronaut Mass (kg):", averageAstronautMassKg);
 console.log("Crew Mass (kg):", crewMassKg);
 console.log("Fuel Mass (kg):", fuelMassKg);
 console.log("Shuttle Mass (kg):", shuttleMassKg);
 console.log("Total Mass (kg):", totalMassKg);
 console.log("Maximum Mass Limit:", maximumMassLimit);
 console.log("Fuel Temperature (Celsius):", fuelTempCelsius);
 console.log("Minimum Fuel Temperature:", minimumFuelTemp);
 console.log("Maximum Fuel Temperature:", maximumFuelTemp);
 console.log("Fuel Level:", fuelLevel);
 console.log("Weather Status:", weatherStatus);

}
else if (!(astronautCount <= 7)){
    console.log("Crew has exceeded maximum capacity.");
 } 
 else if (!(astronautStatus === "Ready")) {
    console.log("Astronauts are not ready.");
 } 
 else if (!(totalMassKg < maximumMassLimit)) {
    console.log("Total mass exceeds maximum limit.");
 }
 else if (!(-300 <= fuelTempCelsius))  {
    console.log("Fuel temperature is too low.");
 }
 else if (!(fuelTempCelsius <= -150)) {
    console.log("Fuel temperature is too high.");
 }
 else if (!(fuelLevel === "100%")) {
    console.log("Fuel level is below full.");
 }
 else if (!(weatherStatus === "Clear")){
    console.log("weather is not clear.");
 }

 





