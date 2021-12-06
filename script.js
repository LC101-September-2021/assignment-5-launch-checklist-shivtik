// Write your JavaScript code here!
window.addEventListener("load", function() {

   let listedPlanets;
   let pilot = document.querySelector("#pilotName")
   let copilot = document.querySelector("#launchForm > form > div:nth-child(2) > label > input[type=text]")
   let fuel = document.querySelector("#launchForm > form > div:nth-child(3) > label > input[type=text]")
   let cargo = document.querySelector("#launchForm > form > div:nth-child(4) > label > input[type=text]")
   let submit = document.getElementById("formSubmit")
   let list = document.getElementById("faultyItems")


   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets)
       console.log(planet)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

   })

   submit.addEventListener('click', (event) => {
    if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "" ){
        // console.log(1)
        // console.log(pilot.value,copilot,fuel,cargo)
        event.preventDefault()
        this.alert("Fields are required")
    } else if ((validateInput(Number(pilot.value)) === "Not a Number") && (validateInput(Number(copilot.value)) === "Not a Number") && 
    (validateInput(Number(fuel.value)) === "Is a Number") && (validateInput(Number(cargo.value)) === "Is a Number")) {
        console.log(2)
        // console.log(pilot.value,copilot.value,fuel.value,cargo.value)
        formSubmission(document, list, pilot.value, copilot.value, fuel.value, cargo.value)
        event.preventDefault()
    } else {
        // console.log(3)
        // console.log(pilot.value,copilot.value,fuel.value,cargo.value)
           event.preventDefault()
           this.alert("Make sure to enter valid information for each field")
       }
    })
   
});