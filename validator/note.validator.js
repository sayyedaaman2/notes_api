import { body,param } from "express-validator";

export const createNoteValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("content")
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 5 })
    .withMessage("Content must be at least 5 characters"),
    body("tags").optional().isArray().withMessage("Tags must be an array")
];

export const updateNoteValidator = [
  body("title")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("content")
    .optional()
    .isLength({ min: 5 })
    .withMessage("Content must be at least 5 characters"),
    body("tags").optional().isArray().withMessage("Tags must be an array")
];

export const paramValidator = [
    param("id").notEmpty().withMessage("Please provide the id params")
]