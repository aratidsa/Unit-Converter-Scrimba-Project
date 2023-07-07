
   /* ----- declaration --- */
const numberEntered = document.getElementById("input-data")
const saveNumBtn = document.querySelector(".save-btn")
const metresToFeet = document.getElementById("metresToFeet")
const feet = document.getElementById("feet")
const feetToMetres = document.getElementById("feetToMetres")
const metres = document.getElementById("metres")

const litresToGallons = document.getElementById("litresToGallons")
const gallons = document.getElementById("gallons")
const gallonsToLitres = document.getElementById("gallonsToLitres")
const litres = document.getElementById("litres")

const kilogramsTopounds = document.getElementById("kilogramsTopounds")
const kilograms = document.getElementById("kilograms")
const poundsToKilograms = document.getElementById("poundsToKilograms")
const pounds = document.getElementById("pounds")

   /* ----- Listens to enter key when user clicks enter key after entering number in the input field --- */
numberEntered.addEventListener('keypress',function(e)
{   if(e.key === "Enter")
    {
    metresToFeet.innerHTML = numberEntered.value
    feetToMetres.innerHTML = numberEntered.value

    litresToGallons.innerHTML = numberEntered.value
    gallonsToLitres.innerHTML = numberEntered.value

    kilogramsTopounds.innerHTML = numberEntered.value
    poundsToKilograms.innerHTML = numberEntered.value

     /* ----- convert metres to feet  and feet to metres--- */
    feet.innerHTML = Number(numberEntered.value * 3.28084).toFixed(3)
    metres.innerHTML = Number(numberEntered.value * 0.3048).toFixed(3)

      /* ----- convert litres to gallons and  gallons to litres--- */
    litres.innerHTML = Number(numberEntered.value * 3.78541).toFixed(3)
    gallons.innerHTML = Number(numberEntered.value * 0.264172).toFixed(3)

      /* ----- convert kilograms to pounds and pounds to kilograms--- */
    kilograms.innerHTML = Number(numberEntered.value * 0.453592).toFixed(3)
    pounds.innerHTML = Number(numberEntered.value * 2.20462).toFixed(3)

     /* ----- clears input field--- */
   numberEntered.value = ""
    }
})




