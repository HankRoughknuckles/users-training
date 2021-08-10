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
           ('Arya', 'Stark', 'Faceless Man', 15),
           ('Peter', 'Baelish', 'Lord', 40),
           ('Ned', 'Stark', 'Lord', 47),
           ('Jon', 'Snow', 'Bastard', 18),
           ('Mance', 'Rayder', 'King Beyond the Wall', 45),
           ('Tyrion', 'Lannister', 'Lord', 25),
           ('Tormund', 'Giantsbane', 'Wildling', 36)
  `)
};

exports.down = pgm => {
  pgm.dropTable('users')
};
