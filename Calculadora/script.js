/****************************************************************
 * Seleção dos elementos HTML
 ****************************************************************/
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento,
  resultadoFinalizado: false,
};

/****************************************************************
 * Funções
 ****************************************************************/

function atualizaDisplay(calculadora) {
  displayElemento.textContent = calculadora.operandoAtual;
  bufferElemento.textContent = calculadora.operandoAnterior;
}

function limpaVariaveis(calculadora){
  calculadora.operandoAtual = "";
  calculadora.operandoAnterior = "";
  calculadora.operador = "";
  calculadora.displayTextoElemento.innerText = "";
  calculadora.bufferTextoElemento.innerText = "";
  atualizaDisplay(calculadora)
}

function adicionaNumero(calculadora, numero) {
  if (calculadora.resultadoFinalizado) {
    calculadora.operandoAtual = "";
    calculadora.operandoAnterior = "";
    calculadora.operador = "";
    calculadora.resultadoFinalizado = false;
  }

  if (numero === "." && calculadora.operandoAtual.includes(".")) return;

  calculadora.operandoAtual += numero.toString();
  atualizaDisplay(calculadora);
}

function escolheOperador(calculadora, operador) {
  if (calculadora.resultadoFinalizado) {
    calculadora.resultadoFinalizado = false;
    calculadora.operandoAnterior = calculadora.operandoAtual + operador;
    calculadora.operandoAtual = "";
    calculadora.operador = operador;
  } else {
    calculadora.operandoAnterior += calculadora.operandoAtual + operador;
    calculadora.operandoAtual = "";
  }
  atualizaDisplay(calculadora);
}

function executaCalculo(calculadora) {
  try {
    calculadora.operandoAnterior +=calculadora.operandoAtual;
    const resultado = new Function(`return ${calculadora.operandoAnterior}`)();
    return resultado;
  } catch (erro) {
    return "Erro";
  }
}

function apagaDigito(calculadora) {
  if (calculadora.operandoAtual === "") {
    calculadora.operandoAnterior = calculadora.operandoAnterior.slice(0, -1);
  } else {
    calculadora.operandoAtual = calculadora.operandoAtual.slice(0, -1);
  }
  atualizaDisplay(calculadora);
}

/****************************************************************
 * Associação funções aos eventos dos elementos HTML
 ****************************************************************/

btnBotoes.forEach(botao => {
  botao.addEventListener("click", (event) => {
    const valorNum = String(event.target.innerText); 
    console.log("Valor do botão clicado:", valorNum);
    adicionaNumero(calculadora, valorNum)
  });
});

btnOperacoes.forEach(botao => {
  botao.addEventListener("click", (event) => {
    const valorOp = String(event.target.innerText); 
    escolheOperador(calculadora, valorOp)
    console.log("Valor do botão clicado:", valorOp);
  });
});

btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

btnIgual.addEventListener("click", () => {
  calculadora.operandoAtual = (executaCalculo(calculadora)).toString();
  atualizaDisplay(calculadora);
  calculadora.operandoAnterior = "";
  calculadora.resultadoFinalizado = true;
});