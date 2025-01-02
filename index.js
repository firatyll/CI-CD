const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;