const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const issueRoutes = require('./Routes/issueRoutes');

const app = express();
app.use(cors());
app.use(express.json());
//mongodb connection
mongoose.connect('mongodb://localhost:27017/issueDB12')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/issues', issueRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));