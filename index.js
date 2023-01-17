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
    addVisible();
    const unitInputValue = unitInputEl.value;
    const calculatedFeet = convert(unitInputValue, multiplier, metersFeetNum);
    const calculatedMeters = convert(unitInputValue, divisor, metersFeetNum);
    const calculatedGallons = convert(
      unitInputValue,
      multiplier,
      litersGallonsNum
    );
    const calculatedLiters = convert(unitInputValue, divisor, litersGallonsNum);
    const calculatedPounds = convert(
      unitInputValue,
      multiplier,
      kilogramsPoundsNum
    );
    const calculatedKilograms = convert(
      unitInputValue,
      divisor,
      kilogramsPoundsNum
    );

    const metersFeetResultsString = createResultString(
      unitInputValue,
      calculatedFeet,
      calculatedMeters,
      "Meters",
      "Feet"
    );
    const litersGallonsResultsString = createResultString(
      unitInputValue,
      calculatedGallons,
      calculatedLiters,
      "Liters",
      "Gallons"
    );
    const kilogramsPoundsResultsString = createResultString(
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
    errMsgEl.style.visibility = "visible";
  }
});
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
function addVisible() {
  const resultsTextEl = document.querySelectorAll(".results-text");
  let index = 0,
    length = resultsTextEl.length;
  for (; index < length; index++) {
    resultsTextEl[index].classList.add("visible");
  }
}
