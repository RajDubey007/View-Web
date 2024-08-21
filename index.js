const express = require('express')
const app = express();
const path = require('path')

PORT = 3000;

app.set("view engine", "ejs");
app.set('views' ,path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/views')));


app.get('/',(req, res) => {
  console.log(__dirname);
  
  res.render('index');
})

app.get('/about',(req, res) => {

  res.render('About');
  })

  
app.get('/contact',(req, res) => {

  res.render('contact');
  })

  
app.get('/services',(req, res) => {

  res.render('services');
  })

  
app.get('/blog',(req, res) => {

  res.render('blog');
  })

  
app.get('/team',(req, res) => {

  res.render('team');
  })


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
