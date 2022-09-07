var result = document.getElementsByClassName("result");
var nome = document.getElementById("student-name");
var nota1 = document.getElementById("primeiroBimestre").value;
var nota2 = document.getElementById("segundoBimestre").value;
var nota3 = document.getElementById("terceiroBimestre").value;
var nota4 = document.getElementById("quartoBimestre").value;

function approvedOrReproved() {
  var media = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaFixada = media.toFixed(2);
  var p = document.createElement("p");

  if (media < 7) {
    p.innerHTML = `
      <p> A média do aluno ${nome} foi de ${media}. Portanto o aluno está <strong>REPROVADO</strong> e terá que refazer o semestre!</p>
    `;
    result.appendChild(p);
  } else if (media >= 7) {
    var repproved = `
        <p>A Média do aluno ${nome} foi de ${media}. Portanto o aluno está <strong>APROVADO</strong> para o próximo Semestre!</p>
        `;
    result.appendChild(p);
  }
}

console.log("Script Funcionando com sucesso...");
