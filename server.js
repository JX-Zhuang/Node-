/**
 * Created by Jesse on 17/3/4.
 */
let http = require("http"),
    url = require("url");
function server(route,handle) {
    function onRequest(request,response) {
        let postData = "",
            pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        request.setEncoding("utf8");
        request.addListener("data",function (postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                postDataChunk + "'.");
        });
        request.addListener("end",function () {
            route(pathname,handle,response,postData);
        });
    }
    http.createServer(onRequest).listen(5560);
    console.log("Server has started.");
}
exports.start = server;


