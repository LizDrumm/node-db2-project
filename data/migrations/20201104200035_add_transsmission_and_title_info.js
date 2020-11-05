
exports.up = function(knex) {
    return knex.schema.table('car-dealer', tbl => {
        tbl.string('Transmission', 128)
        tbl.string('Title', 128)
    })
};

exports.down = function(knex) {
    return knex.schema.table('car-dealer', tbl => {
        tbl.dropColumn('Transmission')
        tbl.dropColumn('Title')
    })
  
};
