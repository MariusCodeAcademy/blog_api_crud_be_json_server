const Joi = require('joi');

function errorDetails(errorsArr) {
  return errorsArr.map((eObj) => ({
    field: eObj.path[0],
    message: eObj.message,
  }));
}
const postSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  image: Joi.string().min(5).max(255).required(),
  body: Joi.string().min(10).required(),
  author: Joi.string().min(3).required(),
  tags: Joi.array().items(Joi.string()).required(),
  date: Joi.date().iso().required(),
}).options({ abortEarly: false });

// const commentSchema = Joi.object({
//   text: Joi.string().required(),
//   authorEmail: Joi.string().email().required(),
//   author: Joi.string().required(),
// }).options({ abortEarly: false });

const validatePost = async (req, res, next) => {
  console.log('req.body ===', req.body);
  try {
    const validationResult = await postSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    console.log('validationResult ===', validationResult);
    next();
  } catch (error) {
    console.log(' validation error ===', JSON.stringify(error, null, 2));

    res.status(400).json({
      msg: 'bad data sent',
      error: errorDetails(error.details),
      type: 'validation',
    });
  }
};
module.exports = { validatePost };
