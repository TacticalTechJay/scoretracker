const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Leaderboard',
    columns:{
        id: {
            type: 'string',
            primary: true,
            generated: 'uuid',
            unique: true
        },
        players: {
            type: 'simple-array',
            nullable: true,
            default: [],
        }
    }
})