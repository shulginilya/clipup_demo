import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config/database.config';

interface UserAttributes {
    id: string;
    username: string;
    password: string;
    createdAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'username' | 'password'> { };
export interface UserOuput extends Required<UserAttributes> { };

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id: string;
    public username: string;
    public password: string;
    public readonly createdAt: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default User;
