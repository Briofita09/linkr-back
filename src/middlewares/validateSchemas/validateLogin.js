import { LoginSchema } from "../../database/schemas/login.shema.js";
import { AppError } from "../../errors/appError.js";

export const validateLogin = async (req, res, next) => {
    const { error } = LoginSchema.validate({ ...req.body });

    if (error) {
        const message = error.details[0].message;
        throw new AppError(message, 400);
    }

    next();
}

