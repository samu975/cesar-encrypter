const shift = 3;
const resultDiv = document.getElementById("result-div");

function getTextAndHideenDiv() {
  let getTextInput = document.getElementById("mensaje").value;

  let hidElement = document.getElementById("hidden");
  hidElement.classList.add("hidden");
  hidElement.classList.remove("grid");

  return getTextInput;
}

function encrypt(text) {
  let nuevoParrafo = document.getElementById("result-text");
  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("grid");
  if (text.length <= 6) {
    nuevoParrafo.value = "Ingresa un mensaje válido";
  } else {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    nuevoParrafo.value = result;
  }
}

function decrypt(text) {
  let nuevoParrafo = document.getElementById("result-text");
  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("grid");
  if (text.length <= 6) {
    nuevoParrafo.value = "Ingresa un mensaje válido";
  } else {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    nuevoParrafo.value = result;
  }
}

function cleanHTML() {
  let nuevoParrafo = document.getElementById("result-text");
  let getTextInput = document.getElementById("mensaje");

  nuevoParrafo.textContent = "";
  getTextInput.value = "";
}

document.getElementById("encriptar-btn").addEventListener("click", function () {
  encrypt(getTextAndHideenDiv());
  cleanHTML();
});

document
  .getElementById("desencriptar-btn")
  .addEventListener("click", function () {
    decrypt(getTextAndHideenDiv());
    cleanHTML();
  });

document.getElementById("copiar-btn").addEventListener("click", function () {
  let codigoACopiar = document.getElementById("result-text");
  codigoACopiar.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "copy successfully",
    toast: "true",
    position: "bottom",
  });
});
