
exports.up = function(knex) {
    return knex.schema.createTable('pets', function(table){
      table.increments('id').primary();
      table.string('name_pet', 100);
      table.string('type', 100).notNullable();
      table.integer('age').notNullable();
      table.string('vaccine', 100);
      table.string('description').notNullable();
      table.integer('users_id').notNullable();
      table.foreign('users_id').references('id').inTable('users')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('pets')
  };
  