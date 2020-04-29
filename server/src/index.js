const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// .env ცვლადებს ვიღებთ
require('dotenv').config();

console.log(process.env.DATABASE_URL);

// ვუკავშირდებით Database-ს
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});


// ვქმნით აპლიკაციას
const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json());


// Routes
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World!');
});
app.use('/api/users', require('./api/users.js'));
app.use('/api/jobs', require('./api/jobs.js'));


// Error Handling
const middlewares = require('./middlewares');
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


// ვრთავთ სერვერს შესაბამისს პორტზე
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`სერვერი ჩართულია http://localhost:${port}`)
})