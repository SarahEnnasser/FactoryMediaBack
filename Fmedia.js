var http=require("http");
var url=require('url');
var queryString=require("querystring");
var httpServer=http.createServer(function(req,resp){
    console.log(url.parse(req.url).path);
    query=url.parse(req.url).query;
    params=queryString.parse(query);
    nom=params['nom'];
    resp.writeHead(200,{'content-type':'text/html'});
    resp.end("<h2> Test Node Js Server " +nom+ "</h2>");

});
httpServer.listen(8889,function(){
    console.log("Node server started");

});