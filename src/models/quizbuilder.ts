import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

interface QuizbuilderAttributes {
    id: string;
    title: string;
    description: string;
    quiz_type?: JSON[];
    shuffleAnswers?: boolean;
    seeResponses?: boolean;
    allowMultipleAttempts?: boolean;
    showOneQuestionAtATime?: boolean;
    timeInMin?: Number;
    total_marks?: Number;
    attempts?: Number;
    courseId?: Number;
    assignmentId?: Number;
    is_deleted?: boolean;
    is_published?: boolean;
    instructorId?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface QuizbuilderCreationAttributes extends Optional<QuizbuilderAttributes, 'id' | 'is_deleted' | 'is_published' | 'attempts' | 'courseId' | 'assignmentId'> { }

class Quizbuilder extends Model<QuizbuilderAttributes, QuizbuilderCreationAttributes> implements QuizbuilderAttributes {
    public id!: string;
    public title!: string;
    public description!: string;
    public quiz_type!: JSON[];
    public shuffleAnswers!: boolean;
    public seeResponses!: boolean;
    public allowMultipleAttempts!: boolean;
    public showOneQuestionAtATime!: boolean;
    public timeInMin!: Number;
    public total_marks!: Number;
    public is_deleted?: boolean;
    public is_published?: boolean;
    public attempts?: Number;
    public courseId?: Number;
    public assignmentId?: Number;
    instructorId?: string;
    public createdAt!: Date;
    public updatedAt!: Date;

    // Associations
    public static associate(models: any): void {
        Quizbuilder.hasMany(models.Question); // Assuming you have a Question model with a corresponding association.
    }
}

export default (sequelize: Sequelize) => {
    Quizbuilder.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        quiz_type: DataTypes.ARRAY(DataTypes.JSON),
        shuffleAnswers: DataTypes.BOOLEAN,
        seeResponses: DataTypes.BOOLEAN,
        allowMultipleAttempts: DataTypes.BOOLEAN,
        showOneQuestionAtATime: DataTypes.BOOLEAN,
        timeInMin: DataTypes.INTEGER, // Use DataTypes.INTEGER instead of DataTypes.NUMBER
        total_marks: DataTypes.INTEGER,
        is_deleted: DataTypes.BOOLEAN,
        is_published: DataTypes.BOOLEAN,
        attempts: DataTypes.INTEGER,
        courseId: DataTypes.INTEGER,
        assignmentId: DataTypes.INTEGER,
        instructorId: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }, {
        sequelize,
        modelName: 'Quizbuilder',
        tableName: 'Quizbuilders',
    });

    return Quizbuilder;
};
