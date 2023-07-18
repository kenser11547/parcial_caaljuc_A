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
            document.getElementById('resultado').innerText = '-No se encontraron personajes-';
        } else {
            const personaje = personajes[0];
            console.log(personaje.name);
            console.log(personaje.species);
            console.log(personaje.gender);
            console.log(personaje.origin.name);
            console.log(personaje.location.name);
            console.log(personaje.image);

            //creacion de elementos
            document.getElementById('nombrePersonaje').innerText = personaje.name;
            document.getElementById('especiePersonaje').innerText = personaje.species;
            document.getElementById('generoPersonaje').innerText = personaje.gender;
            document.getElementById('origenPersonaje').innerText = personaje.origin.name;
            document.getElementById('ubicacionPersonaje').innerText = personaje.location.name;
            document.getElementById('imagenPersonaje').src = personaje.image;
            document.getElementById('resultado').innerText = '-PERSONAJE ENCONTRADO-';
            tabla.style.display = '';
        }
        //si no se encuentran los datos
    }else {
    document.getElementById('resultado').innerText = '-No se encontró el personaje-';
    }
} catch (error) {
  console.log(error);
    }
}
const consultarepisodio = async (evento) => {
    evento.preventDefault();
    let nombrePerson = formul.person.value;
    if (nombrePerson === '') {
      alert("Debe ingresar el nombre de un país");
      return;
    }
      // CONFIGURANDO LA PETICIÓN y el url de API DE RICK AND MORTY ATRAVEZ DEL METODO GET
      const url = `https://rickandmortyapi.com/api/episode/?name=${nombrePerson}`;
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
            document.getElementById('resultado').innerText = '-No se encontraron personajes-';
        } else {
            const personaje = personajes[0];
            console.log(personaje.id);
            console.log(personaje.name);
            console.log(personaje.air_date);
            console.log(personaje.episode);
            console.log(personaje.created);
            console.log(personaje.image);

            //creacion de elementos
            document.getElementById('idPersonaje').innerText = personaje.id;
            document.getElementById('namePersonaje').innerText = personaje.name;
            document.getElementById('datoPersonaje').innerText = personaje.air_date;
            document.getElementById('episodioPersonaje').innerText = personaje.episode;
            document.getElementById('creacionPersonaje').innerText = personaje.created;
            document.getElementById('resultado').innerText = '-PERSONAJE ENCONTRADO-';
            tabla.style.display = '';
        }
        //si no se encuentran los datos
    }else {
    document.getElementById('resultado').innerText = '-No se encontró el personaje-';
    }
} catch (error) {
  console.log(error);
    }
}
const consultarlocalizacion = async (evento) => {
    evento.preventDefault();
    let nombrePerson = formul.person.value;
    if (nombrePerson === '') {
      alert("Debe ingresar el nombre de un personaje");
      return;
    }
      // CONFIGURANDO LA PETICIÓN y el url de API DE RICK AND MORTY ATRAVEZ DEL METODO GET
      const url = `https://rickandmortyapi.com/api/location/?name=${nombrePerson}`;
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
            document.getElementById('resultado').innerText = '-No se encontraron personajes-';
        } else {
            const personaje = personajes[0];
            console.log(personaje.name);
            console.log(personaje.type);
            console.log(personaje.dimension);
            console.log(personaje.created);

            //creacion de elementos
            document.getElementById('naPersonaje').innerText = personaje.name;
            document.getElementById('daPersonaje').innerText = personaje.type;
            document.getElementById('epiPersonaje').innerText = personaje.dimension;
            document.getElementById('crePersonaje').innerText = personaje.created;
            document.getElementById('resultado').innerText = '-PERSONAJE ENCONTRADO-';
            tabla.style.display = '';
        }
        //si no se encuentran los datos
    }else {
    document.getElementById('resultado').innerText = '-No se encontró el personaje-';
    }
} catch (error) {
  console.log(error);
    }
}
//desencadenando eventos atravez de addeventlistener
formul.addEventListener('submit', consultarPerson);
formul.addEventListener('submit', consultarepisodio);
formul.addEventListener('submit', consultarlocalizacion);

