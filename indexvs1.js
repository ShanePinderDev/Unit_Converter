/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const unitInputEl = document.getElementById("unit-input");
const errMsgEl = document.querySelector(".error-message");
const convertBtnEL = document.querySelector(".convert-btn");
const metersFeetNum = 3.2808;
const litersGallonsNum = 0.264;
const kilogramsPoundsNum = 2.204;
const multiplier = "*";
const divisor = "/";
const lengthResultsTextEl = document.querySelector(".length-results-text");
const volumeResultsTextEl = document.querySelector(".volume-results-text");
const massResultsTextEl = document.querySelector(".mass-results-text");

convertBtnEL.addEventListener("click", function () {
  if (unitInputEl.value) {
    errMsgEl.style.visibility = "hidden";
    lengthResultsTextEl.style.visibility = "visible";
    volumeResultsTextEl.style.visibility = "visible";
    massResultsTextEl.style.visibility = "visible";
    const unitInputValue = unitInputEl.value;
    // let calculatedFeet = conversionMultiplier(unitInputValue, metersFeetNum);
    let calculatedFeet = convert(unitInputValue, multiplier, metersFeetNum);

    // let calculatedMeters = conversionDivision(unitInputValue, metersFeetNum);
    let calculatedMeters = convert(unitInputValue, divisor, metersFeetNum);
    // let calculatedGallons = conversionMultiplier(
    //   unitInputValue,
    //   litersGallonsNum
    // );
    let calculatedGallons = convert(
      unitInputValue,
      multiplier,
      litersGallonsNum
    );
    // let calculatedLiters = conversionDivision(unitInputValue, litersGallonsNum);
    let calculatedLiters = convert(unitInputValue, divisor, litersGallonsNum);
    // let calculatedPounds = conversionMultiplier(
    //   unitInputValue,
    //   kilogramsPoundsNum
    // );
    let calculatedPounds = convert(
      unitInputValue,
      multiplier,
      kilogramsPoundsNum
    );
    // let calculatedKilograms = conversionDivision(
    //   unitInputValue,
    //   kilogramsPoundsNum
    // );
    let calculatedKilograms = convert(
      unitInputValue,
      divisor,
      kilogramsPoundsNum
    );

    let metersFeetResultsString = createResultString(
      unitInputValue,
      calculatedFeet,
      calculatedMeters,
      "Meters",
      "Feet"
    );

    let litersGallonsResultsString = createResultString(
      unitInputValue,
      calculatedGallons,
      calculatedLiters,
      "Liters",
      "Gallons"
    );

    let kilogramsPoundsResultsString = createResultString(
      unitInputValue,
      calculatedPounds,
      calculatedKilograms,
      "Kilos",
      "Pounds"
    );

    lengthResultsTextEl.textContent = metersFeetResultsString;

    volumeResultsTextEl.textContent = litersGallonsResultsString;
    massResultsTextEl.textContent = kilogramsPoundsResultsString;
  } else {
    // unitInputEl.value = "# Please";
    // unitInputEl.style.fontSize = "20px";
    // errMsgEl.textContent = "Please type a number between 1 and 999999";
    errMsgEl.style.visibility = "visible";
  }
});

// function conversionMultiplier(input, multiplier) {
//   let calcNum = input * multiplier;
//   let roundedCalcNum = calcNum.toFixed(3);
//   return roundedCalcNum;
// }

// function conversionDivision(input, divisor) {
//   let calcNum = input / divisor;
//   let roundedCalcNum = calcNum.toFixed(3);
//   return roundedCalcNum;
// }

function convert(input, mathOpType, convFigure) {
  if (mathOpType === multiplier) {
    let calcNum = input * convFigure;
    let roundedCalcNum = calcNum.toFixed(3);
    return roundedCalcNum;
  } else if (mathOpType === divisor) {
    let calcNum = input / convFigure;
    let roundedCalcNum = calcNum.toFixed(3);
    return roundedCalcNum;
  }
}

function createResultString(
  inputValue,
  calcFeetValue,
  calcMetersValue,
  metricValue,
  imperialValue
) {
  return `${inputValue} ${metricValue} = ${calcFeetValue} ${imperialValue} | ${inputValue} ${imperialValue} = ${calcMetersValue} ${metricValue}`;
}

// function calcMetersToFeet(input) {
//   let feet = input * 3.2808;
//   let feetrounded = feet.toFixed(3);
//   return feetrounded;

// }

// function calcFeetToMeters(input) {
//   let meters = input / 3.2808;
//   let metersRounded = meters.toFixed(3);
//   return metersRounded;

// }

// console.log(calculatedMeters);
