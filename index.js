const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oliviamaesanandres:oliviamaesanandres@cluster0-myall.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}).catch(err => console.log(err));

const cors = require('cors');
app.use(cors());

const Place = mongoose.model('place',{
    
    name: String,
    location: String,
    nearby: String,
    price: Number
});

app.use(express.static(__dirname + '/dist/tguide'));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/dist/tguide/index.html');
});



app.get('/place', (req, res) => {
    Place.find({},(err, data) => {
    if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.post('/place', urlEncoded, (req, res) => {
    var place = new Place({
       
        name: req.body.name,
        location: req.body.location,
        nearby: req.body.nearby,
        price: req.body.price
    });
    place.save((err, data) => {
        if(err) res.json({"msg":"Invalid Request"});
        res.json(data);
    });
});

app.put('/place/:id', urlEncoded, (req, res) => {
    Place.updateOne({_id:req.params.id},{
        name: req.body.name,
        location: req.body.location,
        nearby: req.body.nearby,
        price: req.body.price
    }, (err, data) => {
        if(err) res.json({msg:'Invalid request'});
            res.json(data);
    });
});

app.delete('/place/:id', (req, res) => {
    Place.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    });
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);

});