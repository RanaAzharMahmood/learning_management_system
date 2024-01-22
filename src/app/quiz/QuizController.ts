import { Request, Response } from 'express';
import QuizBuilderHandler from '../../handlers/QuizBuilderHandler';

class QuizController {

  static async create(req: Request, res: Response) {
    try {
      // Extract relevant data from the request body
      const { title, description, quizType, shuffleAnswers, seeResponses, allowMultipleAttempts, showOneQuestionAtATime, timeInMin, restriction, instructorId } = req.body;

      if (!title || !description || !quizType || !shuffleAnswers || !seeResponses || !allowMultipleAttempts || !showOneQuestionAtATime || !timeInMin || !restriction || !instructorId) {
        res.json({
          success: false,
          data: 'Quiz cannot be created!',
        });
      }
      // Call the creationOfQuiz method with the extracted data
      const dataFetched = await QuizBuilderHandler.creation({
        title,
        description,
        quizType,
        shuffleAnswers,
        seeResponses,
        allowMultipleAttempts,
        showOneQuestionAtATime,
        timeInMin,
        restriction,
        instructorId
      });


      // Send the fetched data as a JSON response
      res.json({
        success: true,
        data: dataFetched,
      });
    } catch (error) {
      // Handle errors and send an appropriate response
      console.error('Error creating quiz:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const fetchedQuiz = await QuizBuilderHandler.getAll();
      res.json({
        success: true,
        data: fetchedQuiz,
      });
    } catch (error) {
      // Handle errors and send an appropriate response
      console.error('Error creating quiz:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      // Extract quiz ID from the URL parameter
      const { id } = req.body;

      // Check if the id parameter is present
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Invalid or missing quiz ID',
        });
      }

      // Call the method to get the quiz by ID
      const fetchQuiz = await QuizBuilderHandler.getByID({ id });

      // Check if the quiz is found
      if (!fetchQuiz) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found',
        });
      }

      // Send the fetched quiz as a JSON response
      res.json({
        success: true,
        data: fetchQuiz,
      });
    } catch (error) {
      // Handle errors and send an appropriate response
      console.error('Error fetching quiz by ID:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }

  static async deletion(req: Request, res: Response) {
    const { id } = req.params;
    const fetchQuiz = await QuizBuilderHandler.deleteByID({ id });
    if (!fetchQuiz) {
      res.status(404).json({
        success: false,
        meessage: 'quiz not found'
      })
    }

    res.status(200).json({
      success: true,
      meessage: 'quiz deleted'
    })
  }


  static async update(req: Request, res: Response) {
    const { id } = req.body
    delete req.body.id
    const updatedData = await QuizBuilderHandler.updateById({ req, id });
    res.status(200).json({
      success: true,
      data: 'successful'
    });
  }
}

export default QuizController;