import Joi from 'joi';

export const input = {
  payload: {
    input: Joi.string().trim().required(),
  },
};
