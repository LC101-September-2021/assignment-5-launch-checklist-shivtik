// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let mt = document.getElementById("missionTarget")
  mt.innerHTML += `<h2>Mission Destination</h2>`
  mt.innerHTML += `<ol type="1">`
  mt.innerHTML += `<li>Name:${name} </li>`
  mt.innerHTML += `<li>Diameter: ${diameter} </li>`
  mt.innerHTML += `<li>Star: ${star}</li>`
  mt.innerHTML += `<li>Distance from Earth: ${distance} </li>`
  mt.innerHTML += `<li>Number of Moons: ${moons}</li>`
  mt.innerHTML += `</ol>`
  mt.innerHTML += `<img src=${imageUrl}>`
}

function validateInput(testInput) {
    let result
    
    if (isNaN(testInput)){
        result = "Not a Number"
        console.log(testInput, "is string")
    } else if (typeof testInput === 'number'){
        result = "Is a Number"
        console.log( testInput, "is num")
    } else if (testInput === ""){
        result = "Empty"
        console.log(testInput, "is empty")
    }
    
    return result
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("in frme")

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")
    let status = true

    
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    if (fuelLevel < 10000) {
        list.style.visibility = 'visible'
        fuelStatus.innerHTML = `Fuel level too low for launch`
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = 'rgb(199, 37, 78)'
        status = false
        
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`
    }

    if (cargoLevel > 10000) {
        list.style.visibility = 'visible'
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = 'rgb(199, 37, 78)'
        status = false
        
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`
    }

    if (status) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = 'rgb(65, 159, 106)'
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    
    let value = Math.floor(Math.random() * 6)

    return planets[value]


}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
