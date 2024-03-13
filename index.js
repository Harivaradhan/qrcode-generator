import inquirer from 'inquirer';
import qr from "qr-image";
import { type } from 'os';
import fs from "fs";
inquirer
  .prompt([
  {
    message: "type your companies URL for generating qr code",
    name: "URL",
  }, 
  ])
  .then((answers) => {
    //if i want to store the url somewhere
    const url=answers.URL;
    console.log(answers);
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
fs.writeFile('url.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });