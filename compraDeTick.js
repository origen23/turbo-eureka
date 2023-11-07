function getValorById(id) {
      return document.getElementById(id).value;
}
  
function calcular() {

      let categoria = getValorById('inputCateg');
      let cantidad = parseFloat(getValorById('cantidad'));
      let res = 0;
      let resPorcentaje = 0
      
      if (cantidad > 0 && categoria !== '') {
     
        if ( categoria == 'Estudiante' ) {
           res = cantidad * 200 * 0.2;
        };
        if ( categoria == 'Trainee' ) {
          res = cantidad * 200 * 0.5;
        };
        if ( categoria == 'Junior' ) {
          res = cantidad * 200 * 0.85;
        };
      } else {
        alert("Debe ingresar la cantidad de ticktes a comprar y una categoría");
      } 
      
      totalVenta('res', 'Total a pagar: $' + res); 
}
  
function totalVenta(id, valorVenta) {
      document.getElementById(id).textContent = valorVenta; 
}
  
// Limpieza

function limpioFormu() {
    document.getElementById('form.venta').reset();
   
    totalVenta('res', 'Total a pagar: $');
}

