const express = require('express');
const path = require('path');
// const { exec } = require('child_process');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3100;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

// const command = `json-server --watch ../db.json --p ${port} -d 2000`;

// exec(command, (err, stdout, stderr) => {
// 	if (err) {
// 		console.log('Error running exec', err);
// 		return;
// 	}
// 	console.log('stdout:', stdout);
// 	console.log('stderr:', stderr);
// });

app.listen(port, () => {
	console.log('Server running on port 3100');
});
