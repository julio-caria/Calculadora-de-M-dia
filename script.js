function approvedOrReproved() {
  var result = document.querySelector(".result");
  var resposta = result.querySelector("#resposta-boletim");

  var nome = document.querySelector("#student-name").value;
  var nota1 = document.querySelector("#primeiroBimestre").value;
  var nota2 = document.querySelector("#segundoBimestre").value;
  var nota3 = document.querySelector("#terceiroBimestre").value;
  var nota4 = document.querySelector("#quartoBimestre").value;

  var media =
    (parseFloat(nota1) +
      parseFloat(nota2) +
      parseFloat(nota3) +
      parseFloat(nota4)) /
    4;
  var notaFixada = media.toFixed(1); // Limitando a quantidade de casas pós a virgula

  var approved = `A Média do aluno <span class="bold">${nome}.</span> foi de <span class="bold">${notaFixada}.</span> Portanto o aluno está <span class="bold">APROVADO</span>  para o próximo Semestre!`;
  var reproved = `A média do aluno <span class="bold">${nome}.</span> foi de <span class="bold">${notaFixada}.</span>  Portanto o aluno está <span class="bold">REPROVADO</span>  e terá que refazer o semestre!`;

  resposta = notaFixada >= 7.0 ? approved : reproved;

  result.innerHTML = resposta;
  if (resposta === approved) {
    result.classList.remove("alert-reproved");
    result.classList.add("alert-approved");
  }
  if (resposta === reproved) {
    result.classList.remove("alert-approved");
    result.classList.add("alert-reproved");
  }
}

console.log("Script Funcionando com sucesso...");
