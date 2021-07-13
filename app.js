const express = require('express');
const app = express();

app.use(express.static('public'));

const mainRouter = require('./routes/main');

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('server running');
});