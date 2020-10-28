const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

class scoretrackClient extends AkairoClient {
    constructor(token) {
        super({
            ownerID: '127888387364487168'
        }, {
            fetchAllMembers: false,
            disableMentions: 'everyone',
            messageCacheMaxSize: 100
        });
        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            blockBots: true,
            directory: './src/commands/',
            prefix: 'st!',
            defaultCooldown: 3,
            automateCategories: true
        })
        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners'
        })
        this.listenerHandler.setEmitters({
            client: this
        });
        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();
        
        this.login(token);
    }

}

module.exports = scoretrackClient;