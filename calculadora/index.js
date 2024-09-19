const display = document.getElementById("display");
const historico = document.getElementById("historico");
historico.value = "";
display.value = "";

function adicionarAoDisplay(input) {
  display.value = display.value + input;
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


    if (display.value == "Infinity") {
      display.style.color = "red";
      display.value = "Error "
      sleep(1000).then(() => { display.value = ""; });
      sleep(1000).then(() => { display.style.color = "white"; });
    }

    //
    // TODO: fazer com que o resultado que aparece no display seja apagado caso digite outro número, se for um operador deixa ele lá.
    //

    //tratamento de dizimas periódicas
    let resultado = display.value.toString();
    if (resultado.includes('.')) {
      format = resultado.split('.');
      if (format[1].length > 4) {
        display.value = format[0] + '.' + format[1].substring(0, 3);
        historico.value = historico.value + " = " + display.value + "...\n";
      }
    } else {
      historico.value = historico.value + " = " + display.value + "\n";
    }

  }
  catch (erro) {
    display.style.color = "red";
    display.value = "Error "
    console.log(erro.message);
    sleep(1000).then(() => { display.value = ""; });
    sleep(1000).then(() => { display.style.color = "white"; });
  }
}
