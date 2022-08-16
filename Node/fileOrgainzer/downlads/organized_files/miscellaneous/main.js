// entry point of my command line

let helpFunc = require("../command/help");
//console.log(helpFunc);
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch(command){
    case "tree":
        console.log("tree function called ands executed succesfully ");
        break;

    case "organizer":
        console.log("tree function called ands executed succesfully ");
        break;
    case "help":
        console.log("tree function called ands executed succesfully "); 
        break;

    default:
        console.log("command not recognized :/");
        break;


}