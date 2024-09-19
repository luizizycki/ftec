const display = document.getElementById("display");
const historico = document.getElementById("historico");
historico.value = "";
display.value = "";
result = false;

function adicionarAoDisplay(input) {
  const operadores = ["+", "-", "/", "*"];
  const ultimoChar = display.value.slice(0, -1);

  //caso o número for o resultado de outra conta, e o input não for um operador, substituir o resultado pelo input.
  if (result == true && !operadores.includes(input)) {
    display.value = input;
    result = false;
  } else {
    display.value = display.value + input;
    result = false;
  }


}

function limparDisplay() {
  display.value = "";
}

function apagar() {
  if (display.value == "") {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function calcular() {
  try {
    historico.value = historico.value + display.value;
    display.value = eval(display.value);
    result = true;

    if (display.value == "Infinity") {
      display.style.color = "red";
      display.value = "Error "
      sleep(1000).then(() => { display.value = ""; });
      sleep(1000).then(() => { display.style.color = "white"; });
    }

    //tratamento de dizimas periódicas
    let resultado = display.value.toString();
    if (resultado.includes('.')) {
      format = resultado.split('.');
      if (format[1].length > 4) {
        display.value = format[0] + '.' + format[1].substring(0, 3);
        historico.value = historico.value + " = " + display.value + "...\n";
        result = true;
      }
    } else {
      historico.value = historico.value + " = " + display.value + "\n";
      result = true;
    }

  }
  catch (erro) {
    display.style.color = "red";
    display.value = "Error "
    sleep(1000).then(() => { display.value = ""; });
    sleep(1000).then(() => { display.style.color = "white"; });
  }
}
