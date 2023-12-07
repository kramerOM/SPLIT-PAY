const express = require('express');
const mongoose = require('mongoose');
const cors = require(`cors`)


const server = express();





server.listen(5000, () => {
    console.log(`Hey our server is Up`)
})