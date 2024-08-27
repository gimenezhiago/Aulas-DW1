var btn = document.querySelector("button");
btn.addEventListener("click", calcular);

function calcular() {
  let troco = Number(document.querySelector("#troco").value);
  let res = document.querySelector("#res");
  res.innerHTML = "";

  let cedula20 = troco / 20;
  let resto1 = troco % 20;

  let cedula10 = resto1 / 10;
  let resto2 = resto1 % 10;

  let moeda1 = resto2 / 1;

  res.innerHTML += `O troco é de ${troco}<br>`;
  res.innerHTML += `${cedula20} cédulas de 20 reais <br> ${cedula10} cédulas de 10 reais <br> ${moeda1} moedas de 1 real`;
}
