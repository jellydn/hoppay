'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var DomainSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	domain: {
		type: String,
		required: true,
		trim: true
	},
	api: {
		type: String,
		required: true,
		trim: true
	},
	status: {
		type: String,
		required: true,
		trim: true
	},
	cat: {
		type: String,
		required: true,
		trim: true
	},
	
});


mongoose.model('Domain', DomainSchema);
