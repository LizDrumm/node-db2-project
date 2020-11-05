
exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        //create a primary key that auto-increments
        tbl.increments('id')
        //no duplicates& is required
        tbl.string('VIN', 17).unique().notNullable()
        //is required
        tbl.string('Make', 150).notNullable()
        tbl.string('Model', 150).notNullable()
        tbl.integer('Mileage').notNullable().defaultTo(0)
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-dealer')
};
