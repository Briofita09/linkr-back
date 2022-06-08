import { createUserService, getUserService } from "../services/userServices.js";

export const createUserController = async (req, res) => {
    const { name, email, password } = req.body;
    await createUserService({ name, email, password });
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
}

export const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    const user = await getUserService({ id })
    return res.status(200).json(user);
}