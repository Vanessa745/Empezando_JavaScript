import { sumar, multiplicar } from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const id_boton = event.submitter.id;

  let resultado;
  if (id_boton === "sumar-button") {
    resultado = sumar(firstNumber, secondNumber);
  } else if (id_boton === "multiplicar-button") {
    resultado = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + resultado + "</p>";
});
