var nome = 'Osseam Guerra'
var idade = 21

// if (idade >= 18) {
//   document.write('Ele pode votar')
// } else {
//   document.write('Ele não pode votar')
// }

// for (let i = 1; i <= 12; i++) {
//   let resultado = i * 7

//   document.write(`7 x ${i} = ${resultado}<br>`)
// }

const btnElement = document.getElementById("botao")
const pElement = document.getElementById("resultado")

let contador = 0;

btnElement.addEventListener("click", function() {
  pElement.textContent = `Voce clicou ${contador += 1} vezes`;
})