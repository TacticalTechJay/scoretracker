const { Command } = require('discord-akairo');

class CreateCommand extends Command {
    constructor() {
        super('create', {
            aliases: ['c', 'create'],
            description: 'Create a leaderboard to start tracking scores.',
            typing: true,
            userPermissions: []
        })
    }

    async condition(message) {
        return !(await this.client.Handler.DB.repos.Guild.findOne(message.guild.id)).t
    }

    exec(message) {

    }
}