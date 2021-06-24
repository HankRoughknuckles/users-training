/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    userName: { type: 'varchar(1000)', notNull: true },
    eyeColor: 'varchar(50)',
    height: 'integer'
  })

  pgm.sql(`
    INSERT INTO users ("userName", "eyeColor", "height")
    VALUES ('johnDoe', 'green', 175),
           ('janetGermaine', 'brown', 153),
           ('janNovak', 'blue', 184)
  `)
};

exports.down = pgm => {
  pgm.dropTable('users')
};
