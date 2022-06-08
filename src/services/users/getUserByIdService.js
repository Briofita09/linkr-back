import * as UserRepository from "../../database/repositories/users.repository.js";
import { AppError } from './../../errors/appError.js'

export const getUserByIdService = async ({ id }) => {
    const user = await UserRepository.findById(id);
    if (!user) throw new AppError('Usuário não encontrado', 404, 'id');
    return user
}