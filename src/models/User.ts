// User.ts
<<<<<<< Updated upstream
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
=======
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
>>>>>>> Stashed changes

interface UserAttributes {
  id: string;
  name: string | null;
  email: string | null;
  password: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public name!: string | null;
  public email!: string | null;
  public password!: string | null;
  public accessToken!: string | null;
  public refreshToken!: string | null;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Define your associations or any other model-specific methods here

  static associate(models: any) {
    User.hasMany(models.Userquizzes, { foreignKey: 'userId' });
  }
}

export default (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      accessToken: {
        type: DataTypes.STRING,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );

  return User;
};
