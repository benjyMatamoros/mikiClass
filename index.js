const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs'); // Sets EJS as the view engine

app.use(express.urlencoded()) // Para parsear el contenido que recibimos como URLencoded
app.use(express.json()) //Para parsear el contenido que recibimos como JSON
app.use(cookieParser()); //Decodifica las cookies y luego se emplea el express.json para leer el contenido

isAdmin = (req, res, next) => {
  if(req.cookies && req.cookies.user){
    return next() 
  } else{
    res.redirect("login")
  }
};


isAuth = (req, res, next) => {
  if(req.cookies && req.cookies.user){
    return next() 
  } else{
    res.redirect("login")
  }
};

app.get('/home', isAuth, (req, res) => { //Creamos el endpoint "pagina" de home que tenemos creada como ejs
  res.render('home', req.query)
});


app.get('/login', (req, res) => { //Creamos el endpoint "pagina" del login que tenemos creada como ejs
  res.render('login')
});

app.get('/logout', (req, res) => { //Creamos el endpoint "pagina" del login que tenemos creada como ejs
  res.clearCookie("user") //Limpiamos la cookie user
  res.redirect('login') 
  console.log('logged out')
});

app.post('/login', (req, res) => { //Aqui recibimos los datos del login.ejs
  const {user, password} = req.body

  if(user === 'admin' && password === '1234'){
    res.cookie('user', user) //options - js no secure si (Creamos cookie al logearse)
    res.redirect('home') //si los valores coinciden redirijimos a la pagina home
    console.log('admin logged')
  } else{
    res.redirect('login') //si los valores no coinciden redirijimos a la pagina login
    console.log('incorrect password')
  }
});

app.listen(port, () => { //Especificamos el puerto que empleara la aplicacion
  console.log(`Example app listening on port ${port}`)
});
