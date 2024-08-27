var btn = document.querySelector("button");
btn.addEventListener("click", calcular);

function calcular() {
  var distancia = Number(document.querySelector("#distancia").value);
  var percorrido = Number(document.querySelector("#km-l").value);
  var pedagio = Number(document.querySelector("#pedagio").value);
  var alcool = Number(document.querySelector("#alcool").value);
  var res = document.querySelector("#res");

  res.innerHTML = "";
  let conta0 = distancia / percorrido;
  let conta1 = conta0 * alcool;
  let conta2 = conta1 + pedagio;

  res.innerHTML = `O custo da viagem total é ${conta2} reais`;
}
