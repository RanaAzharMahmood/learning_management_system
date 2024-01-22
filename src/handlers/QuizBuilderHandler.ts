import { CreateQuizBody } from '../interfaces/Quiz'
import db from "../models";

import { v4 as uuidv4 } from 'uuid';

class QuizBuilderHandler {

    static async creation(data: CreateQuizBody): Promise<any> {
        const quiz = await db.QuizBuilder.build({
            ...data,
            id: uuidv4()
        }).save();

        return quiz;
    }

    static async getAll() {
        return await db.Quizbuilder.findAll()

    }

    static async getByID(params: { id: string }): Promise<any> {
        const { id } = params;
        return db.Quizbuilder.findOne({ where: { id }, raw: true })
    }

    static async deleteByID(params: { id: string }): Promise<any> {

        const { id } = params;
        const quiz = await db.Quizbuilder.update({ is_deleted: true }, { where: { id } })
        return quiz

    }

    static async updateById(params: any): Promise<any> {
        const { dataToUpdate, req, id } = params

        const updates = await db.Quizbuilder.update(req.body, { where: { id }, returning: true, individualHooks: true });

        return updates[1][0];
        

    }

}

export default QuizBuilderHandler;