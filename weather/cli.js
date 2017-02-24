#!/usr/bin/env node
'use strict';

const meow = require('meow'); //check the README
const chalk = require('chalk'); //check the README
const updateNotifier = require('update-notifier'); //check the README
const pkg = require('./package.json'); //check the README
const weather = require('./');  //require is a function defined either by the environment (Node.js)

const cli = meow({
	help: [
		'Usage',
		'  $ weather <input>',
		'',
		'Options',
		'  city [Default: Dhaka]',
		'  country [Default: Bangladesh]',
		'  scale (C/F) [Default: Celcius]',
		'',
		'Examples',
		'  $ weather London UK C',
		'  London, UK',
		'  Condition: Partly Cloudy',
		'  Temperature: 32C'
	]
});

function _toCelcius(temp) {
	return Math.round(((temp - 32) * 5) / 9); // Round a number to the nearest integer
	//conversion Celsius Kelvin
}

updateNotifier({ pkg}).notify(); //to provide simple yet fully customisable notifications.

weather(cli.input, (err, result) => {

	if (err) {

		console.log(chalk.bold.red(err)); //please check the README for more information
		// message (error) sent in red
		process.exit(1);
	}

	let condition = result.query.results.channel.item.condition.text;
	let temperature;

	if (cli.input[2] && cli.input[2] === 'C') { // we have to sent the temperature in Celsius
		// using toCelcius to round temperature after converting it en Celsius
		temperature = _toCelcius(result.query.results.channel.item.condition.temp) + 'C';
	} else if (cli.input[2] && cli.input[2] === 'F') { // we have to sent the temperature in Kelvin
		// using toCelcius to round temperature
		temperature = result.query.results.channel.item.condition.temp + 'F';
	} else {
		//by Default, we have to sent the temperature in Celsius
		temperature = _toCelcius(result.query.results.channel.item.condition.temp) + 'C';
	}

	let city = cli.input[0] ? cli.input[0] : 'Dhaka';
	let country = cli.input[1] ? cli.input[1] : 'Bangladesh';

	// here we define the color of each element
	console.log(chalk.red(city + ', ' + country)); //city and country in red
	console.log(chalk.cyan('Condition: ' + chalk.yellow(condition))); //condition in cyan and the value in yellow
	console.log(chalk.cyan('Temperature: ' + chalk.yellow(temperature))); // temperature in cyan and the value in yellow
	process.exit(); // used to exit in Node.js
	
});
