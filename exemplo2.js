function mensagem() {
  const nome = "lucas";
  document.write("seja mal vindo " + nome); //concatenar=juntar texto
}
function soma(num1, num2) {
  document.writeln(`A soma de ${num1} e ${num2} é: ${num1 + num2}`);
}
function media(num1, num2) {
  return num1 * num2;
}
function medianotas() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const resultado = (valor1 + valor2) / 2;
  document.getElementById("result").innerHTML = media;

  //aprovado *e* a media for maior que 6 se não reprovado
  if (media >= 6) {
    document.getElementById("status").innerHTML = "APROVADO";
  } else {
    document.getElementById("status").innerHTML = "REPROVADO";
  }
}

// mensagem()
// document.write('<br>');
// soma(10,15)
// document.write('<br>');
// soma(5,10)
// document.white('br');
// document.white('mult');
