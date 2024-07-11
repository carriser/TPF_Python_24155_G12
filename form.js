// Validación de datos del formulario

window.addEventListener('load', e=>{
    const formulario = document.getElementById("form");
    const nombre = document.getElementById('nombreApellido');
    const correo = document.getElementById("correoElectronico");
    const telefono = document.getElementById("telefono");
    const archivo = document.getElementById("formFile");
    const dia = document.getElementById("dia");
    const hora = document.getElementById("hora");

    formulario.addEventListener("submit", e=>{
        e.preventDefault();
        validaCampos();
    })

    // capturamos los valores ingresados
    const validaCampos = () => {
        const nombreValor = nombre.value.trim();
        const correoValor = correo.value.trim();
        const telefonoValor = telefono.value.trim();
        const archivoValor = archivo.value.trim();
        const diaValor = dia.value.trim();
        const horaValor = hora.value.trim();

       // validando campo nombre
       // validando en forma ternaria
       // (!nombreValor || nombreValor.length < 2) ? alert('Nombre vacío o muy corto') : validaOk(nombre)

       // validando con if
        if (!nombreValor || nombreValor.length < 2) {
            document.getElementById('nombreApellido').focus();
            alert('Nombre vacío o muy corto');
            e.stopPropagation();
        }

       // validando campo correo electrónico
        if (document.getElementById('radio-email').checked) {
            if (!correoValor) {
                document.getElementById('correoElectronico').focus();
                alert('Si el contacto es por email ingrese su dirección de correo electrónico');
            }
        }

        if (correoValor && !validaEmail(correoValor)) {
            alert('La dirección de correo electrónico no es válida');
        }

        // validando campo teléfono
        if (document.getElementById('radio-whatsapp').checked
            || document.getElementById('radio-telefono').checked) {
            if (!telefonoValor) {
                document.getElementById('telefono').focus();
                alert('Si el contacto es por teléfono o whatsapp ingrese un número de teléfono');
            }
        }

        //validando el archivo a subir
        extension = archivoValor.substring(archivoValor.lastIndexOf('.'),archivoValor.length);
        // Si la extensión obtenida no está incluida en la lista de valores
        // del atributo "accept", mostrar un error.
        if(document.getElementById('formFile').getAttribute('accept').split(',').indexOf(extension) < 0) {
            document.getElementById('formFile').focus();
            alert('Archivo inválido. La extensión debe ser ".jpg" o ".png" o ".jpeg" o ".bmp"');
        }

        //validando turno (día y hora)
        if(diaValor.length == 0){
            document.getElementById('dia').focus();
            alert('Debe elegir un día para el turno');
        } elseif(horaValor.length == 0){
            document.getElementById('hora').focus();
            alert('Debe elegir una hora para el turno');
        }
    }

   const validaEmail = (correo) => {
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo);
   }
})




