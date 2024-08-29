import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res) => {    
    res.render("index.ejs"); 
});

let blogList = [];

app.post('/', (req, res) => {
  console.log(req.body.msj);
  const mensaje = req.body.msj;
  blogList.push({ tuit: mensaje });

  res.render("index.ejs", {
    postMessage: [blogList[blogList.length - 1]]
  });
});

/*
let blogList = [];

app.post('/add-text', (req, res) => {
//console.log(req.body.msj);

const mensaje = req.body.msj;
const messageID = blogList.length; // We use the array index as a unique ID
blogList.push({ id: messageID, tuit: mensaje});

 res.render("index.ejs", {
    postMessage: blogList  
   });
}); */

app.listen(port, () => {
    console.log(`May day may day Server running on port ${port} chuuu! chuuu!`);
});

