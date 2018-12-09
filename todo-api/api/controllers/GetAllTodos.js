'use strict';
var client = require('../helpers/es');

module.exports = {
  GetAllTodos : GetAllTodos
};

function GetAllTodos(req, res) {
  var start = monitor();
  client.search({
    index:'todo',
    type: 'todo',
    q: '*',
    _sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
  }, function(error, response){ // callback
    if(error){
      res.end(JSON.stringify(error)); // send error back to client
    } else {
      var results = [];
      results = response.hits.hits.map(function(hit){ return hit._source }); //  making data ready as per format expected by our swagger client
      res.header('Content-Type', 'application/json');
      res.end(JSON.stringify(results));
    }
  });
}
