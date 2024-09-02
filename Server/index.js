const express = require ("express");
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App is running successfully at ${PORT}`)
})