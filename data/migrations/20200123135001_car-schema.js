
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('vin_number',17).unique().notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('milage').notNullable();
      tbl.string('transmition');
      tbl.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
