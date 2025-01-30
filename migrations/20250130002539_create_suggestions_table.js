
exports.up = function(knex) {
    return knex.schema.createTable('suggestions', (table)=>{
        table.increments('id').primary();
        table.string('text').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('suggestions');
};
