import express from 'express'
import redis from 'redis'
const app = express()
const port = 80         // port 80 is used for the http protocol

const db = redis.createClient({
    url: 'redis://localhost:6379'
})
await db.connect()

app.use(express.static('palaestracoder/spring2023/week07/public'))

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

app.get('/save/:number', async (req, res) => {
    await db.set("thenumber", req.params.number)
    await db.
    res.send("OK")
})

app.get('/showme', async (req, res) => {
    const number = await db.get("thenumber")
    res.send(`<!DOCTYPE html><html><body>${number}</body></html>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

