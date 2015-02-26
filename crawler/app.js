'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Crawler = new Module('crawler');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Crawler.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Crawler.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Crawler.menus.add({
    title: 'crawler example page',
    link: 'crawler example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Crawler.aggregateAsset('css', 'crawler.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Crawler.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Crawler.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Crawler.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Crawler;
});
