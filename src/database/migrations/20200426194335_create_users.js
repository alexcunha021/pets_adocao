
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
         table.increments('id').primary();
         table.string('name', 100).notNullable();
         table.string('last_name', 100).notNullable();
         table.string('email', 100).notNullable().unique();
         table.string('password').notNullable();
     })
   
 };
 
 exports.down = function(knex) {
  return knex.schema.dropTable('users')
 };
 