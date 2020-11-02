const { EntitySchema, Entity } = require('typeorm');
const Leaderboard = require('./Leaderboard');

module.exports = new EntitySchema({
    name: 'Guild',
    columns: {
        id: {
            primary: true,
            type: 'text',
        },
        prefix: {
            type: 'text',
            default: 'st!'
        }
    },
    relations: {
        leaderboard: {
            target: 'Leaderboard',
            type: 'one-to-one',
            joinTable: {
                name: 'players',
                joinColumn: {
                    name: 'players'
                }
            },
            cascade: true,
            inverseSide: 'Guild',
            primary: true,
        }
    }
})

class Guild extends Entity {
    constructor() {
        
    }
}