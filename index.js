/**
 * Created by Jesse on 17/3/4.
 */
let server = require("./server"),
    route = require("./router"),
    requestHandlers = require("./requestHandlers");
let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(route.route, handle);