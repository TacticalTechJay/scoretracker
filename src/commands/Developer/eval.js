const { Command } = require('discord-akairo');
const { inspect } = require('util');

module.exports = class EvalCommand extends Command {
    constructor() {
        super('eval', {
            aliases: ['eval', 'ev'],
            typing: true,
            description: '\'tis eval',
            args: [
            {
                id: 'code',
                match: 'text'
            },
            {
                id: 'async',
                match: 'flag',
                flag: ['--async', '-a'],
                description: 'Run in asynchronous mode.'
            },
            {
                id: 'depth',
                match: 'option',
                flag: '--depth',
                type: 'number',
                default: 0  
            }
            ],
            ownerOnly: true
        });
    }

    async exec(message, args) {
        let code = args.code;
        try{
            let evaled;
            if (args.async) {
                evaled = await eval(`(async() => { ${code} })()`);
            } else {
                evaled = await eval(code);
            }
            let evaluation = inspect(evaled, { depth: args.depth });
            if (evaluation.length >= 1000) {
                console.log(evaluation);
                return message.channel.send('Nibba, dis too lonk.');
            }
            return await message.channel.send(`Done: \`\`\`js\n${evaluation}\`\`\``)    
        } catch (e) {
            const regex = /\[\d+m/gmi;
            return await message.channel.send(`Error: \`\`\`js\n${e.message.replace(regex, '')}\`\`\``);
        }
    }
}