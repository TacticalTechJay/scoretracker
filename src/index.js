const { tokens } = require('../config.json');
const STClient = require('./structures/STClient');
new STClient(process.env.PROD ? tokens.prod : tokens.dev);