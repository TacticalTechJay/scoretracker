const { Command } = require('discord-akairo');

module.exports = class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            typing: true,
            description: 'Set your guild\'s prefix.',
            args: [{
                id: 'prefix',
                limit: 1
            }],
            userPermissions: ['MANAGE_ROLES']
        })
    }

    async exec(message, args) {
        const Guild = await this.client.Handler.DB.repos.Guild.findOne(message.guild.id)
        if (!args.prefix) return await message.channel.send(`The current prefix is \`${Guild.prefix}\``)
        Guild.prefix = args.prefix;
        await this.client.Handler.DB.repos.Guild.save(Guild);
        return await message.channel.send(`Prefix saved to ${args.prefix}`);
    }
}