import * as UserRepository from "../../database/repositories/users.repository.js";

export const createUserService = async ({ name, email, password }) => {
    const newUser = await UserRepository.create({ name, email, password });
    return newUser
}