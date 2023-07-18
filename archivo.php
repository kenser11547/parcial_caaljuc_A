<!--crear un archivo html para poder realizar un formulario para el ingreso de datos-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API FETCH JAVA</title>
    <style>
    body {
        background:linear-gradient(30deg, crimson,sienna, royalblue, indianred, purple);
        background-size:cover;
        background-attachment: fixed;
        font-family: Arial, sans-serif;
        text-align: center;
    }

    form {
        margin-top: 50px;
    }
    table {
        background-color: white;
    }

    input[type="text"], button {
        padding: 10px;
        font-size: 16px;
    }
    /*aqui se diseña el estilo para las columnas de la pagina*/
.column3 {
  float:left;
  width: 30%;
  padding: 15px;
}
/*aqui se diseña el estilo para la seccion de menu de la pagina*/
.column4 {
  float:left;
  width: 30%;
  padding: 15px;
  border-radius: 50px;
  border-color: #000000;
}
/*aqui se diseña el estilo para la seccion de menu de la pagina*/
.column5 {
  float:left;
  width: 30%;
  padding: 15px;
}
</style>
</head>
<body>
    <h3>RICK AND MORTY</h3>
    <form id="formu">
        <!--ingresar el formulario para consultar datos -->
        <input type="text" name="person" id="person">
        <button type="submit">Consultar</button> 
    </form>
    <p id="resultado"></p>
</body>
</html>
<!---se inserto una tabla para una api de rick and morty--->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CONSULTA FETCH</title>
</head>
<body>
    <h1>BUSCAR INFORMACION DE MI PERSONAJE FAVORITO</h1>
    <div>
        <div class="column4">
            <table border="3px solid" id="tabla1">
                <thead>
                    <tr>
                        <th>CARACTER</th>
                        <th>RESULTADO</TH>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NOMBRE</td>
                        <td id="nombrePersonaje"></td>
                    </tr>
                    <tr>
                        <td>ESPECIE</td>
                        <td id="especiePersonaje"></td>
                    </tr>
                    <tr>
                        <td>GENERO</td>
                        <td id="generoPersonaje"></td>
                    </tr>
                    <tr>
                        <td>ORIGEN</td>
                        <td id="origenPersonaje"></td>
                    </tr>
                    <tr>
                        <td>LOCALIZADO</td>
                        <td id="ubicacionPersonaje"></td>
                    </tr>
                    <tr>
                        <td>IMAGEN</td>
                        <td><img src="" alt="" id="imagenPersonaje"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="column3">
            <table border="3px solid" id="tabla2">
                <thead>
                    <tr>
                        <th>EPISODIO</th>
                        <th>RESULTADO</TH>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CODIGO</td>
                        <td id="idPersonaje"></td>
                    </tr>
                    <tr>
                        <td>ACCION</td>
                        <td id="namePersonaje"></td>
                    </tr>
                    <tr>
                        <td>FECHA</td>
                        <td id="datoPersonaje"></td>
                    </tr>
                    <tr>
                        <td>EPISODIO</td>
                        <td id="episodioPersonaje"></td>
                    </tr>
                    <tr>
                        <td>CREACION</td>
                        <td id="creacionPersonaje"></td>
                    </tr>
                </tbody>
            </table> 
        </div>
        <div class="column5">
            <table border="3px solid" id="tabla3">
                <thead>
                    <tr>
                        <th>LOCALIZACION</th>
                        <th>RESULTADO</TH>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UBICACION</td>
                        <td id="naPersonaje"></td>
                    </tr>
                    <tr>
                        <td>PLANETA</td>
                        <td id="daPersonaje"></td>
                    </tr>
                    <tr>
                        <td>DIMENSION</td>
                        <td id="epiPersonaje"></td>
                    </tr>
                    <tr>
                        <td>CREACION</td>
                        <td id="crePersonaje"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!---se ingresa el script para mandar a llamar el archivo de js--->
    <script src="java.js"></script>
</body>
</html>