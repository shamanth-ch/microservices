const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));


app.post('/new_ride',(req,res)=>{
     console.log(req.body);
     res.status(201).send('created user');

})

app.post('/new_ride_matching_consumer',(req,res)=>{
    console.log(req.body);
    res.status(201).send('consumer created');
})



app.listen(3000)
console.log("listening to port 3000")