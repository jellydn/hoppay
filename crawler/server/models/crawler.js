'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var CategoriesSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Validations
 */
// CategoriesSchema.path('title').validate(function(title) {
  // return !!title;
// }, 'Title cannot be blank');

// CategoriesSchema.path('content').validate(function(content) {
  // return !!content;
// }, 'Content cannot be blank');

/**
 * Statics
 */
// CategoriesSchema.statics.load = function(id, cb) {
  // this.findOne({
    // _id: id
  // }).populate('user', 'name username').exec(cb);
// };

mongoose.model('Categories', CategoriesSchema);
