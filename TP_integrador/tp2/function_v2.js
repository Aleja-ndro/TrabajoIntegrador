  function calcular() {
  var precio = 200;
  var descuento = document.getElementById("validationDefault04").value;
  var cantidad = document.getElementById("validationDefault03").value;

  var descuentoAplicado = 0;
  var totalPagar = 0;

  if (descuento === "Junior") {
    descuentoAplicado = precio * 0.15; 
  } else if (descuento === "Trainee") {
    descuentoAplicado = precio * 0.50; 
  } else {
    descuentoAplicado = precio * 0.80; 
  }
  totalPagar = precio - descuentoAplicado;
  document.getElementById("monto").value = "Total a pagar: $" + (totalPagar * cantidad);
  console.log(document.getElementById("monto").value);
}

 
  function limpiarInputs() {
    document.getElementById("validationDefault01").value = ""; 
    document.getElementById("validationDefault02").value = ""; 
    document.getElementById("validationDefault00").value = ""; 
    document.getElementById("validationDefault04").value = "Estudiante"; 
    document.getElementById("monto").innerHTML = ""; 
  }
  
 
