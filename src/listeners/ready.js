const { Listener } = require('discord-akairo')

module.exports = class Ready extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        })
    }

    exec() {
        console.log(`Ready, set, go! I have been launched!`)
    }
}