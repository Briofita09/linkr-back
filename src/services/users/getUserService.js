import * as UserRepository from "../../database/repositories/users.repository.js";
import { AppError } from './../../errors/appError.js'

export const getUserService = async (params) => {
    const queries = []
    for (const key in params) {
        queries.push({ attr: key, value: params[key] })
    }
    const user = await UserRepository.findOne(queries, 'AND');
    if (!user) throw new AppError('Usuário não encontrado', 404, 'id');
    return user
}