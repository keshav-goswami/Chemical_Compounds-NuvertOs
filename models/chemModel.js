const { DataTypes } = require('sequelize');
const   sequelize  =  require('./index');

const Model = sequelize.define('compounds', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    source: {
        type: DataTypes.STRING
    },
    attribution: {
        type: DataTypes.STRING,
    },
    dateModified: {
        type: DataTypes.STRING
    }

})
module.exports=Model;
