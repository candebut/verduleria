

 let precioTotal = 0;
 
 let agregarVerdura = function(nombre, precio){
   let mensaje = document.getElementById("mensaje");
   mensaje.innerText = `Verdura agregada: ${nombre}`;
   precioTotal = precioTotal + precio;
   let total = document.getElementById("total");
   total.innerHTML = precioTotal;
 }

 let reiniciar = function(){
   let mensaje = document.getElementById("mensaje");
   mensaje.innerText = `Seleccione una verdura:`;
   precioTotal = 0;
   let total = document.getElementById("total");
   total.innerText = precioTotal;

 }