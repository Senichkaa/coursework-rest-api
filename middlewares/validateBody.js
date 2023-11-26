const { httpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(httpError(400, "There is missing one of required fields."));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
