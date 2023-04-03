const express = require('express')
const morgan = require('morgan')

const app = express()
/*
MIDDLEWARE: 

*/

app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const dragonList = {
    "dragon1": {name: 'Droga', region: "Forest", color: "Green", pic:"https://cdn.pixabay.com/photo/2023/01/07/09/19/ai-generated-7702851_960_720.jpg"},
    "dragon2": {name: 'FireBreather', region: "Volcano", color: "Black", pic: "https://static.displate.com/280x392/displate/2022-12-27/8e8e3f4a88dd0488a1faa3fd5f0342e9_f96281b8a48d21641046aa5361bbf9e6.jpg"},
    "dragon3": {name: '3 Tailed Beats', region: "Desert", color: 'Brown', pic: "https://cdn.pixabay.com/photo/2023/02/27/23/10/ai-generated-7819490_960_720.jpg"},
    "dragon4": {name: 'Winter Dragon', region: "IceLand", color: 'Blue', pic: "https://cdn.pixabay.com/photo/2023/01/07/09/20/ai-generated-7702855_960_720.jpg"},
}

//Shows you HomePage
app.get('/', function (req, res) {
    const templateVars = {
        dragonList: dragonList, 
    }
  res.render('index', templateVars)
})

//Add New Dragon Page
app.get('/dragon/add', function (req, res) {
    res.render('add')
  })

//Shows You Specific Dragon
app.get('/dragon/specific/:id', function (req, res) {
    const id = console.log(req.params.id)
    res.render('dragon', {dragon: dragonList[req.params.id], id: req.params.id})
  })

  // Shows you Edit Page
  app.get('/dragon/edit/:id', function (req, res) {
    console.log(req.params.id)
    res.render('edit')
  })

// Delete From Home Page
app.post('/dragon/delete/:id', function (req, res) {
    console.log(req.params)
    const id = req.params.id
    delete dragonList[id];
    res.redirect('/')
    })

    //Add a New Dragon
app.post('/dragon/add', function (req, res) {
    console.log(req.body)

    const newDragon = `dragon${Object.values(dragonList).length + 1}`
    dragonList[newDragon] = req.body
    res.redirect('/')
  })


app.listen(3000, () => {
    console.log("Your port is running on PORT 3000")
})