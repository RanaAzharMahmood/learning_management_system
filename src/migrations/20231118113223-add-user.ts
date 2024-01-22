import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('users', {
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
    });

    await queryInterface.createTable('Quizbuilders', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      quiz_type: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue:[]
      },
      shuffleAnswers: {
        type: DataTypes.BOOLEAN,
      },
      seeResponses: {
        type: DataTypes.BOOLEAN,
      },
      allowMultipleAttempts: {
        type: DataTypes.BOOLEAN,
      },
      showOneQuestionAtATime:{
        type:DataTypes.BOOLEAN
      },
      timeInMin: {
        type: DataTypes.INTEGER
      },
      shareThrough:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        defaultValue:[]
      },
      restriction:{
        type:DataTypes.ARRAY(DataTypes.JSON)
      },
      total_marks: {
        type: DataTypes.INTEGER
      },
      is_deleted: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
      is_published: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      attempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      assignmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      instructorId:{
        type: DataTypes.UUID,
      },
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
    });

    await queryInterface.createTable('Userquizzes', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      studentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      quizId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Quizbuilders',
          key: 'id',
        },
      },
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
    });

    await queryInterface.createTable('Question', {
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
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      multiple_options: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
      },
      quizId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Quizbuilders',
          key: 'id',
        },
      },
      question_count: {
        type: DataTypes.INTEGER
      },
      question_time: {
        type: DataTypes.DECIMAL
      },
      marks: {
        type: DataTypes.INTEGER
      },
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
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropAllTables();
  },
};
