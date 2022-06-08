import joi from 'joi';

export const LoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required()
});