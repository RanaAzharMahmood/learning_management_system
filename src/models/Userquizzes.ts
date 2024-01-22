import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

interface UserQuizAttributes {
    studentId: string;
    quizId: string;
}

interface UserQuizCreationAttributes extends Optional<UserQuizAttributes, 'studentId' | 'quizId'> { }

class UserQuiz extends Model<UserQuizAttributes, UserQuizCreationAttributes> implements UserQuizAttributes {
    public studentId!: string;  // Corrected property name
    public quizId!: string;  // Corrected property name

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static associate(models: any): void {
        UserQuiz.belongsTo(models.User, { foreignKey: 'userId' });
        UserQuiz.belongsTo(models.Quizbuilder, { foreignKey: 'quizId' });
    }
}

export default (sequelize: Sequelize) => {
    UserQuiz.init({
        studentId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quizId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Userquizzes',
    });

    return UserQuiz;
};
