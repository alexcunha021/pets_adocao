
exports.up = function(knex) {
    return knex.schema.createTable('avatar_pets', function(table){
      table.increments('id').primary(); 
      table.string('avatar_pets').notNullable();
      table.string('avatar_path').notNullable();
      table.integer('users_id').notNullable();
      table.foreign('users_id').references('id').inTable('users')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('avatar_pets')
  };
  