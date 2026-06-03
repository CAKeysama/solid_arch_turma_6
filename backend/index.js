const express = require('express')
const cors = require('cors')
const UserRouters = require('./routers/UserRouters')
const PetRouters = require('./routers/PetRouters')

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(express.static('public'))

app.use('/users', UserRouters)
app.use('/pets', PetRouters)

app.listen(5000)