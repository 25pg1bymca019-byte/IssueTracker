const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true
        },
        description: {
                type: String,
                required: true
        },
        priority: {
                type: String
        },
        due_date: {
                type: String
        },
        owner: {
                type: String
        }
});

module.exports = mongoose.model(
        'Issue',
        issueSchema
);