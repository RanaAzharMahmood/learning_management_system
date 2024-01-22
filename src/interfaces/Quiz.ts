import { Request } from "express";

export interface QuizBuilder {
  id: string;
  title: string;
  description: string;
  quizType: JSON;
  shuffleAnswers: Boolean;
  seeResponses: Boolean;
  allowMultipleAttempts: Boolean;
  showOneQuestionAtATime: Boolean;
  timeInMin: Number;
  restriction: JSON;
}

export interface CreateQuizBody {
  title?: string;
  description?: string;
  quizType?: JSON;
  shuffleAnswers?: Boolean;
  seeResponses?: Boolean;
  allowMultipleAttempts?: Boolean;
  showOneQuestionAtATime?: Boolean;
  timeInMin?: Number;
  restriction?: JSON;
  instructorId?: string;
}

export interface Question {
  id: string;
  type: JSON;
  discription: string;
  selectType: JSON;
  multiple_options?: JSON;
  answer_option?: JSON;
  marks: Number;
  blankIndex: JSON;
}