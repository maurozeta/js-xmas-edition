function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 carácter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 carácteres',
        'Validar nombre no validó que el nombre sea menor a 50 carácteres',
    );
  }
  function probarValidarCiudad() {
      console.assert(
          validarCiudad('') === 'Este campo no puede estar vacío',
          'Validar ciudad no validó que el campo ciudad no este vacío'
      );
  }
  function probarValidarDescripcionRegalo() {
      console.assert(
          validarDescripcionRegalo('') === 'Este campo no puede estar vacío',
          'Validar Descripcion Regalo no validó que el campo Descripción Regalo no este vacío'
      );
      console.assert(
          validarDescripcionRegalo('111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 carácteres',
          'Validar Descripcion Regalo no validó que la descripcion sea menor a 50 carácteres.'
      )
  }
  
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();
  