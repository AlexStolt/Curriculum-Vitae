const express = require('express');
const path = require('path');

//Create App
const app = express();

//Create Server
const port = 8000
app.listen(port, (err) => {
    if(err)
        res.status(404).send('Not found');
    else 
        console.log(`Listening on Port: ${port}`);
});

//Serve Static Files with Middleware
app.use('/public', express.static('../client'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../client/')});
});