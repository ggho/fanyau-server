'use strict';
var express = require('express');
var Class = require('jsclass/src/core').Class;

var BaseSchema = new Class({
    initialize: function() {
        this.updatedAt = new Date().toJSON();
    }

});



module.exports = BaseSchema;
