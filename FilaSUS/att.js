let fila = [];
let opcao = " ";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes: \n" + pacientes +
    "\nEscolha uma opção: \n1. Novo Paciente \n2. Atender Paciente \n3. Sair"
  );

  switch (opcao) {
    case "1":
      let nome = prompt("Digite o nome do paciente: ");
      fila.push(nome);
      break;
    case "2":
      if (fila.length > 0) {
        alert("Atendendo paciente: " + fila.shift());
      } else {
        alert("Fila vazia!");
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");

