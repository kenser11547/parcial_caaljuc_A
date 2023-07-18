<!--crear un archivo html para poder realizar un formulario para el ingreso de datos-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API FETCH JAVA</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }

    form {
        margin-top: 50px;
    }

    input[type="text"], button {
        padding: 10px;
        font-size: 16px;
    }
</style>
</head>
<body>
    <h3>RICK AND MORTY</h3>
    <form id="formu">
        <!--ingresar el formulario para consultar datos -->
        <input type="text" name="person" id="person">
        <button type="submit">Consultar</button> 
        <button id="botonConsultar" type="button">Consultar a PHP</button>
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
    <table border="3px solid">
        <thead>
            <tr>
                <th>RESULTADO</th>
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
    <!---se ingresa el script para mandar a llamar el archivo de js--->
    <script src="java.js"></script>
</body>
</html>