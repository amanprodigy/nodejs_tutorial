let unirest = require("unirest");

let req = unirest("GET", "http://api.quotable.io/random");

var getQuote = function(){

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    quotation_body = res.toJSON()["body"];
    console.log(quotation_body);
    quote = quotation_body["content"];
    author = quotation_body["author"];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
  });

};

getQuote();

setInterval(function(){
  getQuote();
}, 2000);
