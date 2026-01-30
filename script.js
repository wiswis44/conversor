const tiposCambio = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.86,
  JPY: 162.50
};

const cantidadOrigen = document.getElementById("cantidadOrigen"); 
const monedaOrigen = document.getElementById("monedaOrigen");     
const monedaDestino = document.getElementById("monedaDestino");  
const cantidadResultado = document.getElementById("cantidadResultado");
const botonConvertir = document.querySelector(".boton-convertir"); 


function convertirDivisa() {

  
  let cantidad = parseFloat(cantidadOrigen.value);

  if (!isNaN(cantidad) && cantidad > 0) {

  
    let cantidadEnEuros = cantidad / tiposCambio[monedaOrigen.value];

    let resultado = cantidadEnEuros * tiposCambio[monedaDestino.value];
  
    cantidadResultado.value = resultado.toFixed(2);

  } else {
    alert("Introduce una cantidad positiva");
  }
}

botonConvertir.addEventListener("click", convertirDivisa);


cantidadOrigen.addEventListener("keydown", function (e) {
  
  if (e.key === "Enter") {
    convertirDivisa();
  }
});
