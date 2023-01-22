// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const artRouter = require('./routers/artRouter');
const utilRouter = require('./routers/util');
const ExhibitionRouter = require('./routers/ExhibitionRouter');
const cors = require('cors');

// initiliazing express
const app = express();

const port = 5000;

// middleware
// this will parse JSON data to javaScript
app.use(express.json());
app.use(cors( { origin : [ 'http://localhost:3000' ] } ));

app.use('/user', userRouter);
app.use('/artwork', artRouter);
app.use('/util', utilRouter);
app.use("/exhibition", ExhibitionRouter);

app.use(express.static('./static'));

// route
app.get( '/', (req, res) => {
    res.send('Response from express');
})

// route or endpoint
app.get( '/home', (req, res) => {
    res.send('Response from home');
})

app.listen( port, () => {
    console.log('server has started');
});
