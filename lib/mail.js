var notifier2 = require('mail-notifier2');
var str = require('underscore.string');

module.exports = function(irc) {

    var imap = {
        username: "nodebrbot@gmail.com",
        password: "",
        host: "imap.gmail.com",
        port: 993,
        secure: true
    };

    var notifier = new notifier2(imap);

    notifier.on('mail', function(mail) {
        if(str.include(mail.header.to, 'nodebr@googlegroups.com'))
            irc.say('#nodebr', 'Foi criado um novo tópico na lista: ' + mail.headers.subject + ' https://groups.google.com/forum/#!forum/nodebr');
    }).start();

    notifier.on('error', function(err){
        throw new err;
    });

};
