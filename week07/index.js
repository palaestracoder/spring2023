import express from 'express'
import redis from 'redis'
const app = express()
const port = 80         // port 80 is used for the http protocol

const db = redis.createClient({
    url: 'redis://localhost:6379'
})
await db.connect()

app.get('/inc', async(req, res) => {
    const count = await db.incr("count")
    res.send(`count: ${count}`)
})

app.get('/dec', async(req, res) => {
    const count = await db.incrBy("count", -1)
    res.send(`count: ${count}`)
})

app.get('/echo/:value', (req, res) => {
    res.send(req.params)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

