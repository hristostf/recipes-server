const express = require('express');
const apiRouts = require('./routes/api');
const app = express();

app.set('json spaces', 40);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use('/api/v1', apiRouts);
app.use((req, res) => {
	res.status(200).send('welcome to my api');
});

app.listen(process.env.PORT || 5000);
