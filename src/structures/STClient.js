const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const Handler = require('./Handler');

class scoretrackClient extends AkairoClient {
    constructor(token) {
        super({
            ownerID: ['127888387364487168', '328983966650728448']
        }, {
            fetchAllMembers: false,
            disableMentions: 'everyone',
            messageCacheMaxSize: 100
        });
        
        this.Handler = new Handler(this);

        this.login(token);
    }

}

module.exports = scoretrackClient;