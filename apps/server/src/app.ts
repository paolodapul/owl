import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send({ data: "hello, world!"})
})

app.listen(port, () => {
  return console.log(
    `Express is listening at http://localhost:${port}`
  )
})