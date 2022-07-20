const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const path = require('path')
const port = 800
const bodyparser= require("body-parser")
var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/Contacts")

// schema
var contactSchema= new mongoose.Schema({
    name:"string",
    phone:"string",
    email:"string",
    address:"string",
    desc:"string",
})

var contact = mongoose.model('contact',contactSchema);




//express specific stuff
app.use('/static', express.static('static'))//For serving static files
app.use(express.urlencoded());

// pug specific stuff
app.set('view engine', 'pug')  // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))


//end points
app.get('/',(req,res)=>{
    
    const param = { };
    res.status(200).render('index.pug',param);
})
app.get('/home',(req,res)=>{
    
    const param = { };
    res.status(200).render('home.pug',param);
})

app.get('/contacts',(req,res)=>{
    const param = { };
    res.status(200).render('contact.pug',param);
})

//saving data
app.post('/contacts',(req,res)=>{
    var mydata= new contact({
        name: req.body.name,
        phone:req.body.phone,
    email:req.body.email,
    address:req.body.address,
    desc:req.body.desc,

    });
    mydata.save()
   res.redirect("/")
    
})



// START THE SERVER
app.listen(port, () => {
    console.log("The application Started");
})
