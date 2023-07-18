//contante con seleccion de nodos atravez del id o selectores
const formul = document.querySelector('form');
const tabla = document.querySelector('table');
const button = document.getElementById('botonConsultar');

const consultarPerson = async (evento) => {
    evento.preventDefault();
    let nombrePerson = formul.person.value;
    if (nombrePerson === '') {
      alert("Debe ingresar el nombre de un país");
      return;
    }
      // CONFIGURANDO LA PETICIÓN y el url de API DE RICK AND MORTY ATRAVEZ DEL METODO GET
      const url = `https://rickandmortyapi.com/api/character/?name=${nombrePerson}`;
      const config = {
        method: 'GET'
      };
    }