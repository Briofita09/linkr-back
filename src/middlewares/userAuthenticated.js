import { verify } from 'jsonwebtoken'
import * as UserRepository from '../database/repositories/users.repository'
import { AppError } from '../errors/AppError'

export const UserAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization

    // Verifica se o token JWT foi enviado no cabeçalho da requisição
    if (!authHeader) throw new AppError('JWT_ERROR', 401)

    // Retira o 'Bearer' que vem antes do token JWT no atributo 'authorization' do cabeçalho da requisição
    const token = authHeader.split(' ')[1]

    //Verifica se o token JWT é válido
    try {
        const decoded = verify(token, process.env.JWT_SECRET)

        const user_id = decoded.sub
        
        const user = await UserRepository.findById(user_id)

        if (!user) throw new AppError("JWT_ERROR", 401)

        req.user = { id: user_id }

        return next()
    } catch (err) {
        throw new AppError("JWT_ERROR", 401)
    }
}