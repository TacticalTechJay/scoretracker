const { Command } = require('discord-akairo')

module.exports = class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['h', 'commands', 'help'], 
            typing: true,
            description: 'View a list of commands.',
            args: [{
                id: 'command',
                limit: 1
            }]
        });
    }

    exec(message, args) {
        const commands = [...new Set(this.handler.aliases.array())]
        message.channel.send(args.command ? this.handler.findCommand(args.command) ? `Name: ${this.handler.findCommand(args.command).id}\nDescription: ${this.handler.findCommand(args.command).description}\nCategory: ${this.handler.findCommand(args.command).category}\nAliases: [${this.handler.findCommand(args.command).aliases.join(', ')}]` : 'Invalid command!' : `Commands:\n\`\`\`md\nSystem\n----------------------\n${commands.filter(c => !this.handler.findCommand(c).ownerOnly && this.handler.categories.get('System').has(c)).join('\n')}\`\`\``)
        return;
    }
}