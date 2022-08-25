const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product.ts');
const app = express();


app.get('/',(req:any,res:any) => {
    res.send("Welcome to Home Page");
    console.log("yo")
});

app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
    console.log("yo")
});