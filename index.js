const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});


// send a static page back to the client

// add assests to the website 
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// absolute path for contact page
const absolutePathContact = __dirname + "/views/contact/contact.html";

// absolute path for home page
const absolutePathIndex = __dirname + "/views/home/index.html";


app.get('/', (req, res) => {
    res.sendFile(absolutePathIndex);
});

app.get('/contact', (req, res) => {
    res.sendFile(absolutePathContact);
});