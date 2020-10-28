const { Command } = require('discord-akairo');

module.exports = class ExecCommand extends Command {
    constructor() {
        super('Exec', {
            aliases: ['exec'],
            ownerOnly: true,
            typing: true,
            description: '\'tis exec',
            args: [{
                id: 'code'
            }]
        })
    }

    exec(message, args) {
        
    }
}