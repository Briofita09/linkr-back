import { UserSchema } from "../../database/schemas/user.schema.js";
import { AppError } from "../../errors/appError.js";

export const validateUser = async (req, res, next) => {
    const { error } = UserSchema.validate({ ...req.body });

    if (error) {
        const message = error.details[0].message;
        throw new AppError(message, 400);
    }

    next();
}

