const { body, validationResult } = require('express-validator');

const validateMovie = [
  body('title').notEmpty().withMessage('Title is required').isLength({ max: 255 }).withMessage('Title should contain less than 255 characters'),
  body('director').notEmpty().withMessage('Director is required'),
  body('year').notEmpty().withMessage('Year is required'),
  body('color').notEmpty().withMessage('Color is required'),
  body('duration').notEmpty().withMessage('Duration is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ validationErrors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateMovie
};