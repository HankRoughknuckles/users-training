/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users', {
    id: 'id',
    firstName: { type: 'varchar(1000)', notNull: true },
    lastName: { type: 'varchar(1000)', notNull: true },
    jobTitle: 'varchar(50)',
    age: 'integer'
  })

  pgm.sql(`
    INSERT INTO users ("firstName", "lastName", "jobTitle", "age")
    VALUES ('Daenerys', 'Targaryen', 'Mother of Dragons', 18),
           ('Jaime', 'Lannister', 'Kingslayer', 30),
           ('Arya', 'Stark', 'No One', 15),
           ('Peter', 'Baelish', 'Lord', 45),
           ('Ned', 'Stark', 'Lord', 47),
           ('Ygritte', 'Firehair', 'Wildling', 20),
           ('Jon', 'Snow', 'Bastard', 18),
           ('Tormund', 'Giantsbane', 'Wildling', 36)
  `)
};

exports.down = pgm => {
  pgm.dropTable('users')
};
