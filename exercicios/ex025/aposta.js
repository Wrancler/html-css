// Variáveis
let saldo = 100;
const exibirSaldo = document.getElementById("saldo-usuario");
const valorAposta = document.getElementById("valor-aposta");
const mensagemResultado = document.getElementById("mensagem-resultado");

// Atualizar Saldo na Tela
function atualizarSaldo() {
  exibirSaldo.textContent = `Saldo: R$${saldo.toFixed(2)}`;
}

// Lógica do Jogo da Roleta
document.getElementById("girar-roleta").addEventListener("click", () => {
  const aposta = parseFloat(valorAposta.value);

  if (isNaN(aposta) || aposta <= 0) {
    mensagemResultado.textContent = "Por favor, insira um valor de aposta válido.";
    mensagemResultado.style.color = "red";
    return;
  }

  if (aposta > saldo) {
    mensagemResultado.textContent = "Saldo insuficiente.";
    mensagemResultado.style.color = "red";
    return;
  }

  saldo -= aposta;
  const resultado = Math.random() < 0.5 ? "ganhou" : "perdeu";

  if (resultado === "ganhou") {
    const premio = aposta * 2;
    saldo += premio;
    mensagemResultado.textContent = `Você ganhou! Seu novo saldo é R$${saldo.toFixed(2)}.`;
    mensagemResultado.style.color = "green";
  } else {
    mensagemResultado.textContent = `Você perdeu. Seu novo saldo é R$${saldo.toFixed(2)}.`;
    mensagemResultado.style.color = "red";
  }

  atualizarSaldo();
});

// Adicionar Fundos
document.getElementById("adicionar-fundos").addEventListener("click", () => {
  const fundos = parseFloat(prompt("Digite o valor para adicionar ao saldo:"));

  if (!isNaN(fundos) && fundos > 0) {
    saldo += fundos;
    atualizarSaldo();
  }
});

// Inicializar
atualizarSaldo();
