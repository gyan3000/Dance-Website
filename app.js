const express = require("express")
const app = express()
const path = require('path')
const port = 800

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

app.get('/contacts',(req,res)=>{
    
    const param = { };
    res.status(200).render('contact.pug',param);
})



// START THE SERVER
app.listen(port, () => {
    console.log("The application Started");
})
