const http = require('http');

// creamos el servidor

http.createServer((req, res) => { // recibe un callback, que a su vez recibe un request y un response

        res.writeHead(200, { 'Content-Type': 'application/json' }); // podemos regresar un JSON. un servicio

        let salida = {
            nombre: 'Diego',
            edad: 26,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end(); // ya terminados de crear la respuesta
    })
    .listen(8080); // especificar el puerto va a estar escuchando (3000 o 8080)

console.log('Escuchando el puerto 8080');