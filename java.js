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
       // Consulta a la API SI SE ESTA BUSCANDO O NO
  document.getElementById('resultado').innerText = 'Buscando el archivo que se desea...';
  try {
    // CONSULTA A LA API USANDO FETCH
    const respuesta = await fetch(url, config);
    if (respuesta.ok) {
        //GENERAR JSON
      const data = await respuesta.json();
      const personajes = data.results;

      if (personajes.length === '') {
        document.getElementById('resultado').innerText = 'No se encontraron personajes';
      } else {
        const personaje = personajes[0];
        console.log(personaje.name);
        console.log(personaje.species);
        console.log(personaje.gender);
        console.log(personaje.origin.name);
        console.log(personaje.location.name);
        console.log(personaje.image);
      }
    }
    }
}