<!--crear un archivo html para poder realizar un formulario para el ingreso de datos-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API FETCH JAVA</title>
</head>
<body>
    <h1>DATOS DE PERSONAJE</h1>
    <h3>RICK AND MORTY</h3>
    <form id="formu">
        <!--ingresar el formulario para consultar datos -->
        <input type="text" name="person" id="person">
        <button type="submit">Consultar</button> 
        <button id="botonConsultar" type="button">Consultar a PHP</button>
    </form>
    <p id="resultado"></p>
</body>