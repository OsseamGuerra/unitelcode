const nome = document.getElementById('nome')
const anoNascimento = document.getElementById('ano-nascimento')
const btnEnviar = document.getElementById('enviar')

btnEnviar.addEventListener('click', function() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const ano = parseInt(anoNascimento.value)

  const idade = anoAtual - ano
  
  alert(`${nome.value} tem ${idade} anos de idade`)

  nome.value = ''
  anoNascimento.value = ''
  
})