import express from "express"


const app = express()
app.use(express.json())


app.get("/", (req, res) => {
  return res.json({ message: "Hello World" })
})

app.get("/get-info", (req, res) => {
  const info = req.body()

  return res.json(info)
})

// app.listen(4000, () => {
//   console.log("Server is running in port 4000 🚀")
// })

module.exports = app
