
let express = require('express')
let app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const port = 8080



app
.use(cors({ origin: "http://localhost:3000"}))
.use(express.urlencoded(true))
.use(bodyParser.urlencoded({extended: false}))
.use(bodyParser.json())



//routes
app.get('/api/employe',(req,res)=>{
    let Employe = require('./services/employe/employe')

    Employe.getEmploye((employes)=>{
      
      Employe.getMaxMin((maxmin)=>{
        res.send({employes,maxmin})
      })
      
    })
    
})

app.post('/api/search',(req,res)=>{
    let Employe = require('./services/employe/employe')
    let nom = req.body.nom

    Employe.searchEmploye(nom,(results)=>{
     res.send(results)
    })
    
})

app.post('/api/add',(req,res)=>{
    const data = req.body.data
    let Employe = require('./services/employe/employe')
    
     Employe.addEmploye(data,(result)=>{
        res.send('added')
       console.log(result)
     })
    
})

app.put('/api/add',(req,res)=>{
    const data = req.body.data
    let Employe = require('./services/employe/employe')
    console.log(data.id)
     Employe.updateEmploye(data,(result)=>{
        res.send('updated')
        console.log(result)
     })
    
})

app.delete('/api/add/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    let Employe = require('./services/employe/employe')
    
     Employe.deleteEmploye(id,(result)=>{
        res.send('success')
        console.log(result)
     })
    
})





app.listen(port,()=>{
    console.log("Server runing on port : "+ port)
})