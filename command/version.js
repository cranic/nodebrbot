var pkg = require(__dirname + '/../package.json');
var ircLib = require('irc');
module.exports = function(args, irc, sender){
    irc.say(sender, '          _____');
    irc.say(sender, '         /_____\\');
    irc.say(sender, '    ____[\\`---\'/]____');
    irc.say(sender, '   /\\ #\\ \\_____/ /# /\\');
    irc.say(sender, '  /  \\# \\_.---._/ #/  \\');
    irc.say(sender, ' /   /|\\  |   |  /|\\   \\');
    irc.say(sender, '/___/ | | |   | | | \\___\\');
    irc.say(sender, '|  |  | | |---| | |  |  |    Versão ' + pkg.version);
    irc.say(sender, ircLib.colors.wrap('black', '|__|  \\_| |_#_| |_/  |__|    Por @alanhoff', 'black'));
    irc.say(sender, '//\\\\  <\\ _//^\\\\_ />  //\\\\');
    irc.say(sender, '\\||/  |\\//// \\\\\\\\/|  \\||/');
    irc.say(sender, '      |   |   |   |');
    irc.say(sender, '      |---|   |---|');
    irc.say(sender, '      |---|   |---|');
};
