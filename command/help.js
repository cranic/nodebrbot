module.exports = function(args, irc, sender){
    irc.say(sender, 'Comandos para você digitar:');
    irc.say(sender, '    help    - mostra essa ajuda');
    irc.say(sender, '    npm     - várias funções do npm');
    irc.say(sender, '    version - mostra a versão do bot');
    irc.say(sender, ' ---- ');
    irc.say(sender, 'Dica: digite o seu comando seguido de --help para saber mais sobre o mesmo.');
};
