function cambia()
{
    x=document.getElementById("lenguje").value;
    document.getElementById("elije").innerHTML= "su seleccion es "+ x;
    
}
 
function cambiar(fondo,letra)
{
    elem=document.getElementById('titulo');
    elem.style.backgroundColor=fondo;
    elem.style.color=letra;
}
function calcular() {
    var precio = 200;
    var descuento = document.getElementById("validationDefault04").value;

    if (descuento === "Junior") {
      var descuentoAplicado = precio * 0.15; // 15% de descuento
      var totalPagar = precio - descuentoAplicado;
      var cantidad= document.getElementById("cantidad").value 
      document.getElementById("resultado").textContent = "Total a pagar: " + (totalPagar*cantidad);
    }if else(descuento=== trainee ){
        var descuentoSiguiente = precio * 0.50;
        var total = precio - descuentoSiguiente;
        document.getElementById("resultado").textContent = "Total a pagar "+ (total *cantidad )  }
        else (){
            var descuentoProximo= precio *0.80;
            var tot = precio -descuentoProximo;
            document.getElementById("resultado").textContent= "Total a pagar" +(  tot*cantidad)
        }
  }

