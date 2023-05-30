const cowsay = require("cowsay");
const information = require("./information");

const message = `Hi, my name is ${information.name} and I'm from ${information.campus}!`;

console.log(
  cowsay.say({
    text: message,
  })
);
