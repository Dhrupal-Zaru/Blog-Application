const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
const PostRoutes = require('./routes/PostRoutes')

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/posts', PostRoutes)

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(() => console.log('Error while connecting database'))

app.listen(port, () => console.log(`App is running on port ${port}`))
