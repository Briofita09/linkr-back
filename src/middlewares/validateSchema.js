import { AppError } from "../errors/appError.js";

export function validateSchema(schema, type) {
    return (req, res, next) => {
        const { error } = schema.validate({ ...req.body });

        if (error) {
            const message = error.details[0].message;
            throw new AppError(message, 400);
        }

        next();
    };
}