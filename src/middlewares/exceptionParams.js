import { AppError } from "../errors/appError.js"

const message_type = {
    '_bt_check_unique': 'não disponível'
}

export const exceptionParams = (err, req, res, next) => {
    console.log(err)
    const type = err.routine ? err.routine : null
    const detail = err.detail ? err.detail : null
    const path = detail ? detail.split('Key (')[1].split(')')[0] : null
    if (type) throw new AppError(`${path} ${message_type[type]}`, 400, path)
    return next(err)
}