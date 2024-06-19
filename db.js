// db.js
const sequelize = require('./database');

require('./models/User');

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = sequelize;
