const form = document.forms[0];
const button = document.querySelector("button[type=button]");
const inputs = document.querySelectorAll("input[type=number]");
const result = document.querySelector(".result");
/////////////////////////////////////////////////////////////

button.addEventListener("click", function () {
  [...inputs].forEach((element) => {
    if (element.value < 0) {
      result.style.fontSize = "1.8rem";
      result.innerHTML = "لطفا اعداد را به درستی وارد نمایید ";
    } else {
      let CalculationOfDeductions = inputs[1].value * 3 - inputs[2].value;
      let CalculateTheDenominator = inputs[0].value * 3;
      let finalResult = (
        (CalculationOfDeductions / CalculateTheDenominator) *
        100
      ).toFixed(2);
      result.innerHTML = finalResult + "%";
    }
  });
});
