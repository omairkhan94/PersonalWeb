const express  = require("express");
const path = require("path");
const app = express();

console.log(__dirname);



// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));
app.get("/", (req, res)=>{
    res.send("Hellow world from Omair Khan ");


});
app.get("/about", (req, res)=>{
    res.send("Hellow from about us paege of this website");
});
app.get("/contact", (req, res)=>{
    res.write("Hello contact us through the following links");
    res.write("<a>www.facebook.com");
    res.write("<a>https:/www.omairkhan.com</a>");
    res.write("omairyahya55@gmail.com");
    res.send();
});

app.listen(3000, ()=>{
    console.log(`server listning on port no 3000`);
});
















































// app.get("/",(req, res)=>{
//     res.send("Hello user this is the http/: responce from the server port number 8000 😎😎😎");
// });


//     app.get("/about",(req, res)=>{
//         res.send("this is another http/: responce from the server page about us on port number 8000 this is how actually res work😎😎😎");

// });
// app.listen(3000, ()=>{
//     console.log("its listen on port , 3000 go to any browzer and type localhost:3000 to get the responce");
//     console.log("Are you ready for the epic event over there in the chrome after pressing localhost:3000, try it yourself😎");

// });

