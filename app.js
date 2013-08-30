
var irc = require('irc');
var parser = require(__dirname + '/lib/parser');

var client = new irc.Client('chat.freenode.net', 'nodebrBOT', {
    channels: ['#nodebr']
});

var mail = require(__dirname + '/lib/mail')(client);

client.addListener('error', function(err) {
    console.log('Temos um erro');
    throw new err;
});

client.addListener('pm', function(from, message) {
    parser(message, client, from);
});
