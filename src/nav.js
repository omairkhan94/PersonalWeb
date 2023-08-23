//www.omair.com --welcome to home page
//about --welcome to about us page 
//temp -- welome to my temp page




const express = require ("express");

const app = express();
const port = 3000; 

app.get("/", (req, res)=>{
    res.send("Welcome to the home page of this website www.omairkhan.com");

});
app.get("/about", (req, res)=>{
    res.status(200).send({
        id : 48,
        Name : "omair yahya",
        location : "peshawar",
        country : "pakistan",
        Email : "omairyahya55@gmail.com",

    });
});
app.get("/contact", (req, res)=>{
    res.send("contact us at : omairyahya55@gmail.com");
});
app.listen(port, ()=>{
    console.log(`Server listning to the port no ${port}`);
});