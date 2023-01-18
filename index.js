// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

//////////Keep classes used for styilng and classes/ids used for JS seperate////////
//////// Dont store numbers used for calculations in variables (at least in this case)/////////
//////// Dont store * or  / in variables either ////////////////////
///////// here is a way to make the code more dry////////////

const input = document.getElementById("unit-input");
const errorEl = document.getElementById("error-message");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-results-text");
const volumeEl = document.getElementById("volume-results-text");
const massEl = document.getElementById("mass-results-text");

convertBtn.addEventListener("click", errorMessage);

function errorMessage() {
  if (input.value > 0) {
    errorEl.style.visibility = "hidden";
    displayConvertedValues();
  } else {
    errorEl.style.visibility = "visible";
  }
}

function displayConvertedValues() {
  const inputNum = input.value;
  const metersToFeet = (inputNum * 3.281).toFixed(3);
  const feetToMeters = (inputNum * 0.3048).toFixed(3);
  const litersToGallons = (inputNum * 0.264172).toFixed(3);
  const gallonsToLiters = (inputNum * 3.78541).toFixed(3);
  const kilosToPounds = (inputNum * 2.20462).toFixed(3);
  const poundsToKilos = (inputNum / 2.20462).toFixed(3);

  lengthEl.textContent = `${inputNum} meters = ${metersToFeet} feet | ${inputNum} feet = ${feetToMeters} meters`;
  volumeEl.textContent = `${inputNum} liters = ${litersToGallons} gallons | ${inputNum} gallons = ${gallonsToLiters} liters`;
  massEl.textContent = `${inputNum} kilos = ${kilosToPounds} pounds | ${inputNum} pounds = ${poundsToKilos} kilos`;
}

// Commented out my code based on review by Declan - replaced with his code example which is much DRYer

// const unitInputEl = document.getElementById("unit-input");
// const errMsgEl = document.querySelector(".error-message");
// const convertBtnEL = document.querySelector(".convert-btn");
// const metersFeetNum = 3.2808;
// const litersGallonsNum = 0.264;
// const kilogramsPoundsNum = 2.204;
// const multiplier = "*";
// const divisor = "/";
// const lengthResultsTextEl = document.querySelector(".length-results-text");
// const volumeResultsTextEl = document.querySelector(".volume-results-text");
// const massResultsTextEl = document.querySelector(".mass-results-text");

// convertBtnEL.addEventListener("click", function () {
//   if (unitInputEl.value) {
//     errMsgEl.style.visibility = "hidden";
//     addVisible();
//     const unitInputValue = unitInputEl.value;
//     const calculatedFeet = convert(unitInputValue, multiplier, metersFeetNum);
//     const calculatedMeters = convert(unitInputValue, divisor, metersFeetNum);
//     const calculatedGallons = convert(
//       unitInputValue,
//       multiplier,
//       litersGallonsNum
//     );
//     const calculatedLiters = convert(unitInputValue, divisor, litersGallonsNum);
//     const calculatedPounds = convert(
//       unitInputValue,
//       multiplier,
//       kilogramsPoundsNum
//     );
//     const calculatedKilograms = convert(
//       unitInputValue,
//       divisor,
//       kilogramsPoundsNum
//     );

//     const metersFeetResultsString = createResultString(
//       unitInputValue,
//       calculatedFeet,
//       calculatedMeters,
//       "Meters",
//       "Feet"
//     );
//     const litersGallonsResultsString = createResultString(
//       unitInputValue,
//       calculatedGallons,
//       calculatedLiters,
//       "Liters",
//       "Gallons"
//     );
//     const kilogramsPoundsResultsString = createResultString(
//       unitInputValue,
//       calculatedPounds,
//       calculatedKilograms,
//       "Kilos",
//       "Pounds"
//     );
//     lengthResultsTextEl.textContent = metersFeetResultsString;
//     volumeResultsTextEl.textContent = litersGallonsResultsString;
//     massResultsTextEl.textContent = kilogramsPoundsResultsString;
//   } else {
//     errMsgEl.style.visibility = "visible";
//   }
// });
// function convert(input, mathOpType, convFigure) {
//   if (mathOpType === multiplier) {
//     let calcNum = input * convFigure;
//     let roundedCalcNum = calcNum.toFixed(3);
//     return roundedCalcNum;
//   } else if (mathOpType === divisor) {
//     let calcNum = input / convFigure;
//     let roundedCalcNum = calcNum.toFixed(3);
//     return roundedCalcNum;
//   }
// }
// function createResultString(
//   inputValue,
//   calcFeetValue,
//   calcMetersValue,
//   metricValue,
//   imperialValue
// ) {
//   return `${inputValue} ${metricValue} = ${calcFeetValue} ${imperialValue} | ${inputValue} ${imperialValue} = ${calcMetersValue} ${metricValue}`;
// }
// function addVisible() {
//   const resultsTextEl = document.querySelectorAll(".results-text");
//   let index = 0,
//     length = resultsTextEl.length;
//   for (; index < length; index++) {
//     resultsTextEl[index].classList.add("visible");
//   }
// }
