const { log } = require("console");
const fs = require("fs");

//  const first = fs.readFileSync('./data/first.txt','utf-8')

//  const second = fs.readFileSync('./data/second.txt','utf-8')

//  console.log(first);
//  console.log(second.toString());

//  const title = 'este es el contenido añadido'

//  fs.writeFileSync('./data/fourth.txt',title, {
//     flag : 'a'
//  })

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data.toString());

    fs.writeFile(
      "./data/newfile2.txt",
      "archivo creado desde fs",
      (err, data) => {
        console.log(err);
        console.log(data);

        fs.writeFile(
          "./data/newfile3.txt",
          "archivo creado desde fs",
          (err, data) => {
            console.log(err);
            console.log(data);
          }
        );
      }
    );
  });
});
