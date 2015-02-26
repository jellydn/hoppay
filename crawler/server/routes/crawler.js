'use strict';
var request = require('request');
/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Crawler, app, auth, database) {

  app.get('/crawler/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/crawler/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/crawler/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });
  app.get('/crawler/categories', function(req, res, next) {



	request.get('http://www.google.com/basepages/producttype/taxonomy.en-US.txt', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var tmp = body.split("\n");
			var categories = [];
			if(tmp.length!=0){
				for(var i = 1; i<tmp.length-1; i++){
					categories.push(tmp[i]);
					
				}
				
			}
			
			res.json(categories);
		}
	});
    // res.send('AAAAAAA');
  });

  app.get('/crawler/example/render', function(req, res, next) {
    Crawler.render('index', {
      package: 'crawler'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
