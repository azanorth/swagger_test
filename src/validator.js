const Joi = require('joi');

module.exports.getSchema = Joi.object().keys({
  idGet: Joi.number().integer().required(),
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  passwordNotSaved: Joi.string().trim().required()
});

module.exports.getNotFoundSchema = Joi.object().keys({
  error: Joi.string().required(),
  message: Joi.string().required()
});

module.exports.postSchema = Joi.object().keys({
  idPost: Joi.number().integer().required(),
  name: Joi.string().required(),
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  passwordSaved: Joi.string().trim().required()
});

module.exports.postNotFoundSchema = Joi.object().keys({
  error: Joi.string().required(),
  message: Joi.string().required()
});
