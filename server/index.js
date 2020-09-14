
const app = require('./app')
const port = process.env.NODE_ENV || 4005;


app.listen(port, ()=>{
    console.log(`Listening on: http://localhost:${port}`)
})