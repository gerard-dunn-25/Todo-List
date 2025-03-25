export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task').notNullable()
    table.date('due')
    table.integer('priority')
    table.string('description')
    table.string('status')
    table.boolean('is_complete').defaultTo(false)
  })
}

export function down(knex) {
  return knex.schema.dropTable('todos')
}
