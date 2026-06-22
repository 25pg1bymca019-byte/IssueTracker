const express = require('express');
const Issue = require('../models/Issues');

const router = express.Router();

// Create Issue
router.post('/', async (req, res) => {
        try {
                const issue = new Issue(req.body);

                await issue.save();

                res.status(201).json(issue);
        } catch (err) {
                res.status(400).json({
                        error: err.message
                });
        }
});

// Get All Issues
router.get('/', async (req, res) => {
        try {
                const issues = await Issue.find();

                res.json(issues);
        } catch (err) {
                res.status(400).json({
                        error: err.message
                });
        }
});

// Update Issues
router.put('/:id', async (req, res) => {
        try {
                const updated =
                        await Issue.findByIdAndUpdate(
                                req.params.id,
                                req.body,
                                { new: true }
                        );

                res.json(updated);
        } catch (err) {
                res.status(400).json({
                        error: err.message
                });
        }
});

// Delete Issue
router.delete('/:id', async (req, res) => {
        try {
                await Issue.findByIdAndDelete(
                        req.params.id
                );

                res.json({
                        message: "Issue Removed"
                });
        } catch (err) {
                res.status(400).json({
                        error: err.message
                });
        }
});

module.exports = router;