
const $formulario = document.querySelector('#carta-a-santa');

const nombre = $formulario.nombre.value;

const ciudad = $formulario.ciudad.value;

const comportamiento = $formulario.comportamiento.value;

const descripcionRegalo = $formulario['descripcion-regalo'].value;


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 carácter';
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 carácteres';
    }
    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Este campo no puede estar vacío';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo no puede estar vacío';
    }
    if (descripcionRegalo.length >= 50) {
        return 'Este campo debe tener menos de 50 carácteres';
    }
    return ''
}
