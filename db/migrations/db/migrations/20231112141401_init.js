const { table } = require("../../../db");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("products", table => {
    table.increments("id")
    table.string("name",100).notNullable()
    table.integer("price").notNullable()
    table.text("description").notNullable()
  })
};
//run migration file
//npx knex migrate:latest ==knexfile db/knexfile.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products")
};
