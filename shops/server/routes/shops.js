'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Shops, app, auth, database) {

  app.get('/shops/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shops/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shops/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shops/example/render', function(req, res, next) {
    Shops.render('index', {
      package: 'shops'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
