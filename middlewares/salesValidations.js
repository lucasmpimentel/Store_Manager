const rescue = require('express-rescue');
const joi = require('joi');
const CustomError = require('../utils/CustomError');

const productSchema = joi
  .object({
    productId: joi.number().integer().greater(0).required(),
    quantity: joi.number().integer().greater(0).required(),
  })
  .messages({
    'any.required': '{{#label}} is required',
    'number.integer': '{{#label}} must be a integer',
    'number.greater': '{{#label}} must be greater than or equal to 1',
  });

const newSaleValidation = rescue((req, res, next) => {
  const sales = req.body;
  
  sales.forEach(({ productId, quantity }) => {
  const { error } = productSchema.validate({ productId, quantity });
  if (error) {
    console.log(error.details[0].type);
    error.status = error.details[0].type === 'any.required' ? 400 : 422;
    throw new CustomError(error.status, error.message);
  }
  });

  next();
});

module.exports = {
  newSaleValidation,
};
