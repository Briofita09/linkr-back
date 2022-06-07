import { AppError } from "../errors/appError.js"

export const exceptionHandler = (err, req, res, next) => {
    console.log(err)
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            path: err.path
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error!'
    })
}