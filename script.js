//*let escribiro = "Hola Mundo";
//document.getElementById("main").innerHTML = escribiro;
//console.log(escribiro);
//document.writeln("Este es un contenido escrito con document.write");

// Variable para almacenar el valor seleccionado
let selectedValue = null;
// Obtener todos los botones dentro del contenedor de calificación
const buttons = document.querySelectorAll('.rating-container button');
const mostrarilustracion = document.querySelector('.main-container.selected');
const act_h2 = document.querySelector('.numero-rating h2');
const main = document.getElementById('main');
const condition = true;
let botonPrevio = null; // Variable para rastrear el botón previamente seleccionado

// Agregar evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Restaurar el estilo del botón anterior
        if (botonPrevio) {
            botonPrevio.style.backgroundColor = 'hsl(218, 22%, 17%)';
            botonPrevio.style.color = 'hsl(0, 0%, 100%)';
        }
        // Aplicar estilo al botón actual
        button.style.backgroundColor = 'hsl(0, 0%, 100%)';
        button.style.color = 'black';
        
        // Actualizar variables
        selectedValue = button.value;
        botonPrevio = button; // Guardar referencia al botón actual
    });
});

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Obtenemos el botón
        const boton = document.querySelector('.Submit-button');
        
        // Añadimos el evento click al botón
        boton.addEventListener('click', () => {
            // Cambiamos el color de fondo a blanco
            boton.style.backgroundColor = 'hsl(0, 0%, 100%)';
            boton.style.color = 'black'; // Cambiamos el color del texto para mejor contraste
            mostrarilustracion.style.display = 'block';
            main.style.display = 'none';
            act_h2.innerHTML = `You selected ${selectedValue} of 5`;
            console.log('Botón clickeado');
            console.log('Valor seleccionado:', selectedValue);
        });
    });
}