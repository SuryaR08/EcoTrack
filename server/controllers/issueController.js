const Issue = require("../models/Issue");

exports.createIssue = async (req, res) => {
  const { description } = req.body;
  const userId = req.user.id;
  try {
    const newIssue = await Issue.create({ description, userId });
    res.json(newIssue);
  } catch (error) {
    res.status(500).json({ error: "Issue creation failed" });
  }
};

exports.getIssues = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      const issues = await Issue.findAll();
      res.json(issues);
    } else {
      const issues = await Issue.findAll({ where: { userId: req.user.id } });
      res.json(issues);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch issues" });
  }
};

exports.deleteIssue = async (req, res) => {
  try {
    const issueId = req.params.id;
    await Issue.destroy({ where: { id: issueId } });
    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete issue" });
  }
};
