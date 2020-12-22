'use strict';

let response = require('./resources');

let connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Aplikasi nodejs berjalan");
}