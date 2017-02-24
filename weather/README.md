# cli-weather
> RDD, CDD and TDD workshop

                                      **Please read this before continuing project**

**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Definition](#Definition)
  - [meow](#meow)
  - [chalk](#chalk)
  - [update-notifier](#update-notifier)
  - [package.json](#package.json)
  - [let](#let)toCelcius
- [Function](#Function)
  - [toCelcius](#toCelcius)
  - [updateNotifier](#updateNotifier)
  - [weather](#weather)
- [index.js](#index.js)
  - [yql](#yql)
  - [loadsh](#loadsh)
- [Just tell me what to do](#just-tell-me-what-to-do)
- [Licence](#licence)



##Definition


##meow //acronym for, Morning Erotically Obsessed Woman (or Women)
    Install

    $ npm install --save meow

    Usage

    $ ./foo-app.js unicorns --rainbow


for more information, please visit github https://github.com/sindresorhus/meow



##chalk //Terminal string styling.

    Install

      $ npm install --save chalk

    Usage

      const chalk = require('chalk');

      console.log(chalk.blue('Hello world!'));

for more information, please visit github https://github.com/chalk/chalk

##update-notifier

    Install

      $ npm install --save update-notifier

    Usage

      const update-notifier= require('update-notifier');

for more information, please visit github https://github.com/yeoman/update-notifier



##package.json

This document is all you need to know about what's required in your package.json file.
It must be actual JSON, not just a JavaScript object literal.
A lot of the behavior described in this document is affected by the config settings described in npm-config.


for more information, please visit github https://docs.npmjs.com/files/package.json


##let

    The difference is scoping. var is scoped to the nearest function block and let is scoped to the nearest enclosing block (both are global if outside any block), which can be smaller than a function block.

    Also, variables declared with let are not accessible before they are declared in their enclosing block. As seen in the demo, this will throw a ReferenceError exception.


for more information, please visit https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let


##Function

##toCelcius
      Round a number to the nearest integer

##updateNotifier
please check at the top the Definition of updateNotifier

##weather
we obtain the city( and the country), condition and the temperature.
<!-- END doctoc generated TOC please keep comment here to allow auto update -->


##index.js
##yql
      For Web services that support write access, YQL allows you to insert, update, and delete using server-side JavaScript within the insert, update, and delete elements, which are nested within the binding element.

      for more information, please visithttps://developer.yahoo.com/yql/guide/yql-execute-chapter.html

##loadsh

      Visit this website please https://lodash.com/


## Just tell me what to do


1. Update [tests file](./test)
1. Update [lib](./lib) JSDoc comments
1. Don't forget to commit and push

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
