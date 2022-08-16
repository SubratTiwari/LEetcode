let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"; 
 // ye wala link se waaha jana h haaha score ho 
const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch");
request(url, cb);

function cb(err, res, body) {
  if (err) {
    console.error("error", err);
  } else {
    handleHTML(body);
  }
}

function handleHTML(html){
    let selecTool = cheerio.load(html);// uper wale link kin html dalata h ai selectool ke andr 
    let anchorElem = selecTool('a[data-hover="View All Results"]');// ye ak anchor elemet iske andr link pda huaa jaha janan hai
    // console.log(anchorElem);
    //attr methods -> Method for getting all attributes and their values
    let relativeLink = anchorElem.attr("href");// anchorelem.attr ko baatna padta jaha se link lene hai to href se chahiyhe
    // console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;// iske andr full link aa jayega 
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
}










