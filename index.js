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
  var mensaje = req.body.msj;

  switch(req.body.choice){
    case "goku":
      mensaje = "あなたはやはりホンモノのサイヤ人の戦士だ Anata wa yahari honmono no saiyajin no senshi da You are a true Saiyan warrior"
    break;
    case "pulpFiction":
      mensaje = "Well, allow me to retort! What does Marsellus Wallace look like?  DOES. HE. LOOK. LIKE. A BITCH?!  NOOOOO! "
    break;
    case "soraya":
      mensaje = "¡Maldita lisiada! ¡Escuincla babosa! ¡Demuestrame tu poder satánico!!! "
    break;
    default:
    break;
  }

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

