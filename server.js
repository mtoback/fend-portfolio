var sys   = require('sys');
var http  = require('http');
var url   = require('url');
var h5bp = require('h5bp');
var dispatcher = require('httpdispatcher');
dispatcher.setStatic('dist');
var connect = require("connect");
//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
var app = h5bp.createServer({ root: __dirname + '/dist' }, handleRequest)
.listen(3000, "10.16.196.133", function() {
    //runs when our server is created
    console.log('Server running at http://10.16.196.133:3000/');
  });

this.dispatch = function(req, res) {
  console.log("in dispatch");
  console.log("request=" + req);
  //some private methods
  var serverError = function(code, content) {
    res.writeHead(code, {'Content-Type': 'text/plain'});
    res.end(content);
  }

  var renderHtml = function(content) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content, 'utf-8');
  }
  console.log("request from " + req.url);
  var parts = req.url.split('/');

  if (req.url == "/") {
    fs.readFile('./dist/index.html', function(error, content) {
      if (error) {
        serverError(500);
      } else {
        renderHtml(content);
      }
    });

  } else {
    var action   = parts[1];
    var argument = parts[2];

    if (typeof actions[action] == 'function') {
      var content = actions[action](argument);
      renderHtml(content);
    } else {
      serverError(404, '404 Bad Request');
    }
  }
}