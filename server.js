const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})

// env destructure
require('dotenv').config()
const { SECRET } = process.env

const app = express()
const PORT = process.env.PORT || 3001

// connect session to sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sess = {
    secret: SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session(sess))

app.use(routes)


app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));    
app.set('view engine', 'handlebars')

//routing
app.get('/',(req,res) => {
    res.render('main');
});
app.get('/dashboard',(req,res) => {
    res.render('dashboard');
});

// connect to server and database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening',))
})