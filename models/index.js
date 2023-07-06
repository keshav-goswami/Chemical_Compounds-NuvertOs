const Sequelize  = require('sequelize');
const sequelize = new Sequelize('chemicalsdb', 'root', '235711', {
    host: 'localhost',
    dialect: 'mysql',
    define: { "id": false, "freezeTableName": true, "createdAt": false, "updatedAt": false }
});

try {
    sequelize.authenticate();
    console.log('connection has been established succesfully');
} catch (error) {
    console.error('Failed to create connections', error);
}
module.exports = sequelize;