let botaoCalcular = document.getElementById("calcular");
botaoCalcular.onclick = calcularmulta;

function calcularmulta() {
  let veiculo = Number(document.getElementById("veiculo").value);
  let velocidade = Number(document.getElementById("velocidade").value);
  let divsaida = document.getElementById("saida");
  let excesso = veiculo - velocidade;
  let multa = (excesso / velocidade) * 100;

  if (veiculo <= velocidade) {
    divsaida.innerHTML = "Sem multa";
  } else {
    if (multa < 20) {
      divsaida.innerHTML = `Você excedeu a velocidade da via em ${multa.toFixed(
        2
      )}%. Sua multa é de <b>R$ 130,16</b>`;
    } else if (multa >= 20 && multa < 50) {
      divsaida.innerHTML = `Você excedeu a velocidade da via em ${multa.toFixed(
        2
      )}%. Sua multa é de <b>R$ 195,23</b>`;
    } else {
      divsaida.innerHTML = `Você excedeu a velocidade da via em ${multa.toFixed(
        2
      )}%. Sua multa é de <b>R$ 880,41</b>`;
    }
  }
}
