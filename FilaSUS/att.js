
class FilaEspera {
  constructor() {
    this.fila = [];
  }

  filaPreferencial(paciente) {
    this.fila.unshift(paciente);
    console.log(`${paciente} adicionado a fila preferencial!`);
  }



  adicionarPaciente(paciente) {
    const now = new Date();
    const horas = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const horaFormatada = `${horas}:${minutos}`;
    
    this.fila.push(paciente);
    console.log(`${paciente} adicionado à fila, as ${horaFormatada}`);
  }

  proximoPaciente() {
    if (this.fila.length === 0) {
      console.log("Não há pacientes na fila.");
    } else {
      const proximo = this.fila.shift();
      console.log(`Próximo paciente: ${proximo}`);
    }
  }

  consultarFila() {
    console.log("Fila de espera:");
    this.fila.forEach((paciente, index) => {
      console.log(`${index + 1}. ${paciente}`);
    });
  }
}


// Criando uma instância da fila
const filaConsultorio = new FilaEspera();

// Menu de interação
let opcao;
do {
  console.log("\n--- Fila de Espera ---");
  console.log("1. Adicionar paciente");
  console.log("2. Próximo paciente");
  console.log("3. Adicionando na fila preferencial");
  console.log("4. Consultar fila");
  console.log("0. Sair");
  
  opcao = parseInt(prompt("Digite a opção desejada: "));

  switch (opcao) {
    case 1:
      const novoPaciente = prompt("Digite o nome do paciente: ");
      filaConsultorio.adicionarPaciente(novoPaciente);
      break;
    case 2:
      filaConsultorio.proximoPaciente();
      break;
    case 3:
    const preferencialPaciente = prompt("Digite o nome do idoso: ")  
    filaConsultorio.filaPreferencial(preferencialPaciente +" (preferencial)");
      break;
    case 4:
     filaConsultorio.consultarFila();
     break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== 0);