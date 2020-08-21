const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('port');

app.use(app.use(express.json({extended: true })));

async function start() {
    try {
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
    } catch (e) {
        console.log('Oops...');
        process.exit(1);
    }
}

start();