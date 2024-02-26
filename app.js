const express = require('express');
const moment = require('moment');
const app = express();

const PORT = process.env.PORT || 8012;

app.get('/', (req, res) => {
    console.log("Got hit");
    res.json({
        message : "Successfully entered first express app "+moment().format('YYYY-MM-DD h:mm a'),
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`);
});