import database from '../index.js'
import {DataTypes} from "sequelize";

const userModel = database.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users',
    timestamps: false,
});

export default userModel;