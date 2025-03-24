/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'create todo fullstack',
      due: '2025-05-28',
      description:
        'create and deploy a fullstack todo app, this can be used for multiple trellos',
      status: 'In progress',
      completed: false,
    },
    {
      id: 2,
      task: 'test todo fullstack',
      due: '2025-05-28',
      description: 'test todo fullstack app, this will be good practice',
      status: 'idle',
      completed: false,
    },
  ])
}
