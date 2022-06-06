const rescue = require('express-rescue');
const joi = require('joi');
const CustomError = require('../utils/CustomError');

const productSchema = joi
  .object({
    name: joi.string().min(5).required(),
    quantity: joi.number().integer().greater(0).required(),
  })
  .messages({
    'any.required': '{{#label}} is required',
    'string.min': '{{#label}} length must be at least {#limit} characters long',
    'number.integer': '{{#label}} must be a integer',
    'number.greater': '{{#label}} must be greater than or equal to 1',
  });

const insertValidation = rescue((req, res, next) => {
  const { name, quantity } = req.body;
  
  const { error } = productSchema.validate({ name, quantity });
  if (error) {
    error.status = error.details[0].type === 'any.required' ? 400 : 422;
    throw new CustomError(error.status, error.message);
  }
  
  next();
});

module.exports = {
  insertValidation,
};
