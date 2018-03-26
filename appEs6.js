
// constructor
class Seguro {
  constructor(modelo, anio, tipo) {
    this.modelo = modelo;
    this.anio = anio;
    this.tipo = tipo;
  }

  cotizarSeguro() {
    /*
        toyota = 1.15
        hiunday = 1.05
        nissan = 1.35
    */
    const base = 2000;
    let cantidad;

    switch (this.modelo) {
      case '1':
        cantidad = base * 1.15;
        break;
      case '2':
        cantidad = base * 1.05;
        break;
      case '3':
        cantidad = base * 1.35;
        break;
    }

    // diferencia de años
    let diferencia = new Date().getFullYear() - this.anio;
    // cada año de diferencia hay que reducir 3% del valor del seguro
    cantidad -= (diferencia * 3) * cantidad / 100;

    /*
        si el tipo es basico agregamos el 30% mas
        si el tipo es completo agregamos el 50% mas
    */
    if (this.tipo === 'basico') {
      cantidad *= 1.3;
    } else {
      cantidad *= 1.5;
    }

    return cantidad;
  } // fin de cotizarSeguro()

}// fin de la clase Seguro

// todo lo que se muestra en la interfaz
class Interfaz {

  mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');

        if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
        } else {
        div.classList.add('mensaje', 'correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('label[for="marca"]'));

        setTimeout(() => {
        document.querySelector('.mensaje').remove();
        }, 3000);
    }

  mostrarResultado(seguro, total) {
        let marca;

        switch (seguro.modelo) {
        case '1':
            marca = 'Toyota';
            break;
        case '2':
            marca = 'Hiunday';
            break;
        case '3':
            marca = 'Nissan';
            break;
        }

        // crear un div y meter los resultados
        const resultado = document.getElementById('resultado');
        let divResumen = document.createElement('div');

        divResumen.innerHTML = `
            <p class="header">Tu Resumen</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: $/.${total.toFixed(2)}</p>
        `;

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(divResumen);
        }, 3000);
    }
}// fin de la clase interfaz

// eventlistener
const formulario = document.getElementById('formulario');
      anio = document.getElementById('anio');

formulario.addEventListener('submit', cotizarSeguro);

function cotizarSeguro(e) {
    e.preventDefault();
    
    // leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value; // mostramos el valor del select seleccionado

    // leer el año seleccionado del select
    const anioSelected = anio.options[anio.selectedIndex].value;
    
    // leer el tipo 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    if (marcaSeleccionada === '' || anioSelected === '' || tipo === '') {
        interfaz.mostrarMensaje('Faltan datos, asegurese de llenar todos e intente de nuevo','error');
    }
    else {
        // limpiar resultados anteriores
        const limpiarResultados = document.querySelector('#resultado div');

        if (limpiarResultados != null) {
            limpiarResultados.remove();
        }

        const seguro = new Seguro(marcaSeleccionada, anioSelected, tipo);
        //cotizar seguro
        const cantidad = seguro.cotizarSeguro();
        // mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'correcto');
    }

} // fin de cotizar seguro


let anioCarro = new Date().getFullYear();
    anioCarroMenor = anioCarro - 20;

for (let i = anioCarro; i > anioCarroMenor; i--) {
    let opcion =  document.createElement('option');
    opcion.value = i;
    opcion.innerHTML = i;
    anio.appendChild(opcion);
}
        
