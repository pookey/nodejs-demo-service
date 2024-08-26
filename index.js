const express = require('express');
const GreeterFactory = require('./GreeterFactory');

const app = express();

app.get('/hello', (req, res) => {
	const name = req.query.name || 'World';
	const greeter = GreeterFactory.getGreeter(name);
	res.send(greeter.greet(name));
});

if (require.main === module) {
	const port = 3000;
	app.listen(port, () => {
		console.log(`Hello World service running at http://localhost:${port}`);
	});
}

module.exports = app;

