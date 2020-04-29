
exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table){
      table.increments('id').primary();
      table.string('rua', 100).notNullable();
      table.integer('numero').notNullable();
      table.string('bairro').notNullable();
      table.string('whatsapp').notNullable();
      table.integer('users_id').notNullable();
      table.foreign('users_id').references('id').inTable('users')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('contacts')
  };
  