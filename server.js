import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'
import routesProducts from './src/routes/routesProducts.js'
import methodOverride from 'method-override'


const app = express()

app.use(methodOverride('_method'))

const __dirname = path.resolve();

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true })) 

app.use(express.json()) 




// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');

routesProducts(app)
// servidor

app.listen(3000, () => {
    console.log(`el servidor esta corriendo en : http://localhost:${3000}`)
  })