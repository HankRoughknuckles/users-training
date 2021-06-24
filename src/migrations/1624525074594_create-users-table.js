/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    userName: { type: 'varchar(1000)', notNull: true },
    eyeColor: 'varchar(50)',
    height: 'integer'
  })
};

exports.down = pgm => {
  pgm.dropTable('users')
};
