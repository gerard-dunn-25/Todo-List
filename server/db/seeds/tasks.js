export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'Create todo fullstack',
      is_complete: false,
    },
    {
      id: 2,
      task: 'Deploy todo fullstack',
      is_complete: false,
    },
  ])
}
