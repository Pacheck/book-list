const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/api/books')
var cors = require('cors');


const app = express();
connectDB();


app.use(cors({ origin: true, credentials: true}));

app.use(router);

app.use(express.json({ extended: false }));

app.use('/api/books', router);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));