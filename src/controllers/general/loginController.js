import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError.js";
import { getUserService } from "../../services/users/getUserService.js";

const { sign } = jwt

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await getUserService({ email });
    if (!user) throw new AppError('Usuário não encontrado', 404);

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) throw new AppError('Senha inválida', 401);

    const token = sign({}, process.env.JWT_SECRET, {
        subject: user.id.toString(),
        expiresIn: process.env.JWT_EXPIRESIN
    })

    return res.status(200).json({ user, token });
}