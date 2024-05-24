const express = require("express");
const { getIssues, createIssue, deleteIssue } = require("../controllers/issueController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getIssues);
router.post("/", authMiddleware, createIssue);
router.delete("/:id", authMiddleware, deleteIssue);

module.exports = router;
