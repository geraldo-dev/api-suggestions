const knex = require('knex');
const config = require('../../knexfile');

const conn = knex(config.development);

class Suggestion {
    static async create( text ){
        return conn('suggestions').insert({text});
    }

    static async findAll() {
        return conn('suggestions').select('*');
      }
}

module.exports = Suggestion;