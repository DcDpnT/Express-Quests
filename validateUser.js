const { body, validationResult } = require('express-validator');

const validateUser = [
    body('email').isEmail().withMessage('Invalid email'),
    body('firstname').isLength({ max: 255 }).withMessage('Firstname should contain less than 255 characters'),
    body('lastname').isLength({ max: 255 }).withMessage('Lastname should contain less than 255 characters'),
    body('city').notEmpty().withMessage('City is required'),
    body('language').notEmpty().withMessage('Language is required'),
    (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(422).json({ validationErrors: errors.array() });
      }
      next();
    },
  ];
  
  module.exports = {
    validateUser
  };