const request = require("request");
const cheerio = require("cheerio");
const {gifs} = require("./scorecard");
function getAllMatch(url) {
    // console.log("from allMatch.js ",url);
    request(url, cb);
}
function cb(err, res, body) {
  if (err) {
    console.error("error", err);
  } else {
    extractAllMatchLink(body);
  }
}
function extractAllMatchLink(html){
    let selecTool = cheerio.load(html);
    let scorecardElemArr = selecTool('a[data-hover="Scorecard"]');// pure score card aa jayeaga 
    console.log(scorecardElemArr.length); // issie 60 print honge ki 60 match honge
    //attr methods -> Method for getting all attributes and their values
    for (let i = 0; i < scorecardElemArr.length; i++){
        let scorecardLink = selecTool(scorecardElemArr[i]).attr("href");
        // console.log(i + 1 + ") " + scorecardLink);
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        gifs(fullLink);
        break;

    }
}
module.exports = {
  getAllMatch: getAllMatch,
};