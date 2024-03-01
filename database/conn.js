const mongoose = require('mongoose');
// require('dotenv').config();

.then(() => {
    console.log("Connected successfully.");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
