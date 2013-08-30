var opt = require('optimist');
var commands = require('requi')({
    path : __dirname + '/../command'
});

module.exports = function(message, irc, sender){
    args = opt.parse(message.split(' '));
    if(!commands[args._[0]])
        irc.say(sender, 'Comando desconhecido, digite help para mostra a ajuda.');
    else
        commands[args._[0]](args, irc, sender);
};
