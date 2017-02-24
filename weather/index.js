'use strict';

const YQL = require('yql'); //check the README
const _ = require('lodash'); //check the README


//module.exports is the object that's actually returned as the result of a require call.
module.exports = (opts, callback) => {
	opts = opts || []; //the option object that represents each OPTION in JavaScript.
										//options objects are a common pattern for passing arguments into a function. This article explains how they work and why using them makes your code more readable.

	let query;
	// we use let here because the let statement declares a block scope local variable.

	if (_.isEmpty(opts)) { // we use isEmpty to verify if opts is empty or not (isEmpty is a boolean function)
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Dhaka, Bangladesh")');
		// if opts is empty, so we use this query to recover values from database for the country Bangladesh
	} else {
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + opts[0] + ', ' + opts[1] + '")');
		// if opts is empty, so we use this query to recover values from database using the first and the second option.
	}

	query.exec((err, response) => {
		//The exec() method tests for a match in a string.
		//This method returns the matched text if it finds a match, otherwise it returns null.
		if (err) {
			return callback(err); // if there is an error, we have to send to the user a message countains the error
		}

		callback(null, response); // in this case, we do not have any error, so we have to send to the user what we obtained in executing the query.
	});
};
