exports.up = function(knex) {
  return knex.schema.createTable('questions', table => {
    table.increments('id').primary();
    table.string('category')
    table.string('correct_answer', 1000)
    table.specificType('incorrect_answers', 'text ARRAY');
    table.string('question', 1000)
    table.string('type')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')
};
