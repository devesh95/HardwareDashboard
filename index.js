/**
 * Initiate slack bot using an appropriate slack auth token
 * @type {[type]}
 */
var slack = require('slack');
var debug = require('debug')('hardware-bot');
var bot = slack.rtm.client();

if (!process.env.SLACK_TOKEN) {
  var credentials = require('./credentials.json');
} else {
  var credentials = {
    token: process.env.SLACK_TOKEN
  };
}

bot.listen({ token: credentials.token });

bot.started(function (argument) {
  debug('Hardware functionality active.');
});


