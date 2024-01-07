// obtenemos datos de del documento de HTML
const botones = document.querySelectorAll('.btn');
const display = document.getElementById('displayValorActual');
// SE OBTIENEN LOS DATOS DE CADA BOTON.
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.value; //  SE SACA EL SESULTADO POR EL VALOR ASIGNADO.
        // CONDICIONAL PARA BORRAR EL CONTENIDO CON EL BOTON C 
        if (boton.id === 'borrarTodo') {
            display.textContent = '0';
            return;
        }
        // CONDICIONAL PARA BORRAR EL ULTIMO DIJITO CON LA FLECHA.
        if (boton.id === 'borrarUno') {
            if (display.textContent.length === 1 || display.textContent === 'Error!') {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }
        //BOTON PARA EVALUAR LA OPERACION A REALIZAR.
        if(boton.id === 'igual'){
            try{
                display.textContent = eval(display.textContent);
            }catch{
                display.textContent = "Error!"; // PARA VERIFICAR SI EXISTEM ERRORES.
            }
            return;
        }
        // FUNCION PARA MOSTRAR LOS DATOS CONCATENADOS EN LA PANTALLA.
        if (display.textContent === "0" || display.textContent === 'Error!') {

            display.textContent = botonApretado;
        } else {
            display.textContent += botonApretado;
        }
    });
});