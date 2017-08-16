const Joi = require('joi');

module.exports.getShema = Joi.object().keys({
  id: Joi.number().integer().required(),
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().trim().required()
});

module.exports.getNotFoundShema = Joi.object().keys({
  error: Joi.string().required(),
  message: Joi.string().required()
});

module.exports.postShema = Joi.object().keys({
  id: Joi.number().integer().required(),
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().trim().required()
});

module.exports.postNotFoundShema = Joi.object().keys({
  error: Joi.string().required(),
  message: Joi.string().required()
});
