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

    static async findById(id) {
        return conn('suggestions').where({ id }).first();
      }

    // static async findAll() {
    //     return conn('suggestions').select('*');
    //   }

    // static async findAll() {
    //     return conn('suggestions').select('*');
    //   }
}

module.exports = Suggestion;