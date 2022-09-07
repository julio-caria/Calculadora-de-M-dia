function approvedOrReproved() {
  var result = document.querySelector(".result");
  var resposta = result.querySelector("#resposta-boletim");
  var nome = document.querySelector("#student-name").value;
  var nota1 = document.querySelector("#primeiroBimestre").value;
  var nota2 = document.querySelector("#segundoBimestre").value;
  var nota3 = document.querySelector("#terceiroBimestre").value;
  var nota4 = document.querySelector("#quartoBimestre").value;

  var media = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaFixada = media.toFixed(1); // Limitando a quantidade de casas pós a virgula

  var approved = `A Média do aluno ${nome} foi de ${notaFixada}. Portanto o aluno está <strong>APROVADO</strong> para o próximo Semestre!`;
  var reproved = `A média do aluno ${nome} foi de ${notaFixada}. Portanto o aluno está <strong>REPROVADO</strong> e terá que refazer o semestre!`;

  resposta = notaFixada >= 7 ? approved : reproved;

  result.innerHTML = resposta;

  if (resposta === approved) {
    result.classList.add("alert-approved");
    result.classList.remove("alert-reproved");
  }

  if (resposta === reproved) {
    result.classList.remove("alert-approved");
    result.classList.add("alert-reproved");
  }
}

console.log("Script Funcionando com sucesso...");
