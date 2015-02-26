'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var SubCategoriesSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  parent: {
    type: Schema.ObjectId,
    ref: 'Categories'
  },
  sub_parent: {
    type: Schema.ObjectId,
    ref: 'SubCategories'
  }
});

/**
 * Validations
 */
// SubCategoriesSchema.path('title').validate(function(title) {
  // return !!title;
// }, 'Title cannot be blank');

// SubCategoriesSchema.path('content').validate(function(content) {
  // return !!content;
// }, 'Content cannot be blank');

/**
 * Statics
 */
// SubCategoriesSchema.statics.load = function(id, cb) {
  // this.findOne({
    // _id: id
  // }).populate('user', 'name username').exec(cb);
// };

mongoose.model('SubCategories', SubCategoriesSchema);
