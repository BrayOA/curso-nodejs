const http = require("http");

http;
const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
      <h1>Not Found</h1>
      <p>esta pagina no se encontro</p>
      <a href="/">volver al inicio</a>
    `);
  response.end();
});
server.listen(4000);

console.log("servidor escuchando en el puerto 4000");
