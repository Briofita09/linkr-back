import { createUserService } from "../../services/users/createUserService.js";

export const createUserController = async (req, res) => {
    const { name, email, password } = req.body;
    await createUserService({ name, email, password });
    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
}