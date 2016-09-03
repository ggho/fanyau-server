'use strict';
var express = require('express');
var Class = require('jsclass/src/core').Class;
var BaseSchema = require('./BaseSchema.js');

var UserSchema = new Class(BaseSchema, {
	initialize: function(params, next){
		this.callSuper();

		var err, result = null;

		if(params.userId === undefined || params.name === undefined || params.email === undefined){
			err = new Error('Schema missing compulsory params');
			return next(err);
		}

		this.userId = params.userId;
		this.name = params.name;
		this.email = params.email;
		this.gender = params.gender || null;
		this.age = params.age || null;
		this.industry = params.industry || null;
		this.location = params.location || null;
		this.lunchHrFrom = params.lunchHrFrom || null; //13:30
		this.lunchHrTo = params.lunchHrTo || null;
		this.intro = params.intro || null;
		this.interestingTopics = params.interestingTopics || null;
		this.targetGender = params.targetGender || null;
		this.targetRelationship = params.targetRelationship || null;
		this.signupAt = new Date(params.signupAt || Date.now()).toJSON();


		result = this;
		next(err, result);
	}
});


module.exports = UserSchema;
