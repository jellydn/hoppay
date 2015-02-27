'use strict';
var request = require('request');
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  CategoriesModel = mongoose.model('Categories'),
  SubCategoriesModel = mongoose.model('SubCategories'),
  _ = require('lodash');
  
  
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
  app.get('/categories/mapping', function(req, res, next) {
		
		SubCategoriesModel.find({type:"1"},function(err,data){
			for(var i = 0; i< data.length; i++){
				console.log(data[i].title + " --- "+ data[i].name_parent);
			}
			
			
		});
		res.json({'test':'Integrate'});
  });
  app.get('/crawler/categories', function(req, res, next) {



	request.get('http://www.google.com/basepages/producttype/taxonomy.en-US.txt', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var tmp = body.split("\n");
			var categories = [];
			var categoriesFilters1 = [];
			var categoriesFilters2 = [];
			var categoriesFilters3 = [];
			var categoriesFilters4 = [];
			var categoriesFilters5 = [];
			var categoriesFilters6 = [];
			var categoriesFilters7 = [];
			if(tmp.length!=0){
				for(var i = 1; i<tmp.length-1; i++){
					var tmp1 = tmp[i].split(">");
					
					if(tmp1.length!=0){
						categories.push(tmp1);
						if(tmp1.length==1){
							categoriesFilters7.push({
								"categories":tmp1[0].trim(),
								"subs":[]
							});
		
							CategoriesModel.findOne({ 'title': tmp1[0] }, function (err, c) {
							  if (!err){
									var cat = new CategoriesModel();
									cat.title = tmp1[0];
									cat.save(function(err) {
										if (err) {
										  return res.status(500).json({
											error: 'Cannot save the article'
										  });
										}
									});
								}else{
									
									
								}
							});

							
						}else{
							
							
							
							
						}
						
					}
					
					
				}
				for(var i = 0; i<categories.length; i++){
					if(categories[i].length==2){
						categoriesFilters1.push(categories[i]);
						
						
					}
					if(categories[i].length==3){
						categoriesFilters2.push(categories[i]);
					}
					if(categories[i].length==4){
						categoriesFilters3.push(categories[i]);
					}
					if(categories[i].length==5){
						categoriesFilters4.push(categories[i]);
					}
					if(categories[i].length==6){
						categoriesFilters5.push(categories[i]);
					}
					if(categories[i].length==7){
						categoriesFilters6.push(categories[i]);
					}
					
					
					
					
					
					
					
				}
				
			}


			
			for(var i=0; i<categoriesFilters7.length;i++){

				
				for(var j=0; j<categoriesFilters1.length;j++){
					if(categoriesFilters1[j][0].trim() == categoriesFilters7[i].categories.trim()){
						
						categoriesFilters7[i].subs.push({name:categoriesFilters1[j][1].trim(),"subs":[]});
						
						var s = new SubCategoriesModel();
						s.title = categoriesFilters1[j][1].trim();
						s.name_parent = categoriesFilters7[i].categories.trim();
						s.type = 1;
						s.save();
						
					}
				}
				
				for(var j=0; j<categoriesFilters7[i].subs.length;j++){
					for(var k=0; k<categoriesFilters2.length;k++){
						if(categoriesFilters2[k][1].trim() == categoriesFilters7[i].subs[j].name.trim()){
							
							categoriesFilters7[i].subs[j].subs.push({name:categoriesFilters2[k][2].trim(),"subs":[]});
							
							var s = new SubCategoriesModel();
							s.title = categoriesFilters2[k][2].trim();
							s.name_parent = categoriesFilters7[i].subs[j].name.trim();
							s.type = 0;
							s.save();

						}
					}
					for(var k=0; k<categoriesFilters7[i].subs[j].subs.length;k++){
						for(var n=0; n<categoriesFilters3.length;n++){
							if(categoriesFilters3[n][2].trim() == categoriesFilters7[i].subs[j].subs[k].name.trim()){
								categoriesFilters7[i].subs[j].subs[k].subs.push({name:categoriesFilters3[n][3].trim(),"subs":[]});
								
								var s = new SubCategoriesModel();
								s.title = categoriesFilters3[n][3].trim();
								s.name_parent = categoriesFilters7[i].subs[j].subs[k].name.trim();
								s.type = 0;
								s.save();
							}
						}
						for(var kk=0; kk<categoriesFilters7[i].subs[j].subs[k].subs.length;kk++){
							for(var nn=0; nn<categoriesFilters4.length;nn++){
								if(categoriesFilters4[nn][3].trim() == categoriesFilters7[i].subs[j].subs[k].subs[kk].name.trim()){
									categoriesFilters7[i].subs[j].subs[k].subs[kk].subs.push({name:categoriesFilters4[nn][4].trim(),"subs":[]});
									
									
									var s = new SubCategoriesModel();
									s.title = categoriesFilters4[nn][4].trim();
									s.name_parent = categoriesFilters7[i].subs[j].subs[k].subs[kk].name.trim();
									s.type = 0;
									s.save();
								}
							}
							for(var kkk=0; kkk<categoriesFilters7[i].subs[j].subs[k].subs[kk].subs.length;kkk++){
								for(var nnn=0; nnn<categoriesFilters5.length;nnn++){
									if(categoriesFilters5[nnn][4].trim() == categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].name.trim()){
										categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].subs.push({name:categoriesFilters5[nnn][5].trim(),"subs":[]});
										
										var s = new SubCategoriesModel();
										s.title = categoriesFilters5[nnn][5].trim();
										s.name_parent = categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].name.trim();
										s.type = 0;
										s.save();
									}
								}
								
								for(var kkkk=0; kkkk<categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].subs.length;kkkk++){
									for(var nnnn=0; nnnn<categoriesFilters6.length;nnnn++){
										if(categoriesFilters6[nnnn][5].trim() == categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].subs[kkkk].name.trim()){
											categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].subs[kkkk].subs.push({name:categoriesFilters6[nnnn][6].trim(),"subs":[]});
											
											var s = new SubCategoriesModel();
											s.title = categoriesFilters6[nnnn][6].trim();
											s.name_parent = categoriesFilters7[i].subs[j].subs[k].subs[kk].subs[kkk].subs[kkkk].name.trim();
											s.type = 0;
											s.save();
										}
									}
								}
							}
						}
						
					}
				}
				
				
				
			}
			
			
			
			
			
			
			
			
			
			
			res.json(categoriesFilters7);

			
			
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
