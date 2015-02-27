'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ShopsSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: true,
		trim: true
	},
	old_price_number: {
		type: String,
		required: true,
		trim: true
	},
	special_price_number: {
		type: String,
		required: true,
		trim: true
	},
	link: {
		type: String,
		required: true,
		trim: true
	},
	categories: {
		type: String,
		required: true,
		trim: true
	}
	
});


mongoose.model('Shops', ShopsSchema);
