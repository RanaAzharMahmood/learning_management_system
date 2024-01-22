// Question.ts
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface QuestionAttributes {
  id: string;
  question_type?: string | null;
  description?: string | null;
  selection_type?: string | null;
  multiple_options?: Array<object> | null;
  answer_option?: Array<object> | null;
  blankIndex?:Array<Number> | null;
  quizId?: string;
  question_count?: Number | null;
  question_time?: Number | null;
  marks?: Number | null;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'id'> {}

class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
  public id!: string;
  public question_type!: string | null;
  public description!: string | null;
  public selection_type!: string | null;
  public multiple_options!: Array<object> | null;
  public answer_option!: Array<object> | null;
  public blankIndex!:Array<Number> | null;
  public quizId!: string;
  public question_count!: Number | null;
  public question_time!: Number | null;
  public marks!: Number | null;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    // Define associations here
    Question.belongsTo(models.Quizbuilder, {
      foreignKey: 'quizId',
    });
  }
}
export default (sequelize: Sequelize) => {
    Question.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        question_type: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        selection_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        multiple_options: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          defaultValue: [],
          allowNull: true,
        },
        answer_option: {
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: true,
        },
        blankIndex:{
            type:DataTypes.ARRAY(DataTypes.NUMBER),
            defaultValue:[]
        },
        quizId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'quizbuilders',
            key: 'id',
          },
        },
        question_count: {
          type: DataTypes.INTEGER,
        },
        question_time: {
          type: DataTypes.DECIMAL,
        },
        marks: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: 'Question',
        tableName: 'questions',
      }
    );
  
    return Question;
  };