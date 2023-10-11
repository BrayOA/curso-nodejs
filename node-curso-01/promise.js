const { readFile } = require("fs");
const {promisify} = require ("util")

const readFilePromise =  promisify(readFile)

async function read() {
  try {
      const result = await readFilePromise("./data/first.txt", 'utf-8');
      console.log(result);
      const result2 = await readFilePromise("./data/second.txt", 'utf-8');
      console.log(result2);
      const result3 = await readFilePromise("./data/third.txt", 'utf-8');
      console.log(result3);
      const result4 = await readFilePromise("./data/fourth.txt", 'utf-8');
      console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read();
