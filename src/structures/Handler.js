const { CommandHandler, ListenerHandler, InhibitorHandler } = require('discord-akairo');
const { createConnection, EntitySchema } = require('typeorm');
const Guild = require('../entities/Guild');
const Leaderboard = require('../entities/Leaderboard');

module.exports = class Handler {
    constructor(client) {
        this.Command = new CommandHandler(client, {
            allowMention: true,
            blockBots: true,
            directory: './src/commands/',
            prefix: async (message) => {
                return (await this.DB.repos.Guild.findOne(message.guild.id)) ? (await this.DB.repos.Guild.findOne(message.guild.id)).prefix : (await this.DB.repos.Guild.save({ id: message.guild.id })).prefix;
            },
            defaultCooldown: 3,
            automateCategories: true
        });
        this.Listener = new ListenerHandler(client, {
            directory: './src/listeners'
        });
        this.Listener.loadAll();
        this.Command.loadAll();

        this.connectDB();
    }

    async connectDB() {
        try {
            const connection = await createConnection({
                type: 'postgres',
                host: "0.0.0.0",
                username: "jay",
                password: "42069BRUH",
                database: process.env.PROD ? "scoretracker" : "scoretrackerbeta",
                entities: [ Guild, Leaderboard ],
                synchronize: true,
                logging: false
            });
            this.DB = {
                connection,
                repos: {
                    Guild: connection.getRepository('Guild'),
                    Leaderboard: connection.getRepository('Leaderboard')
                },
                entities: { Guild, Leaderboard }
            }
            console.log('DB Connected!');
        } catch (e) {
            throw e;
        }
    }
}