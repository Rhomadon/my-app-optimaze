const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const gcApiRoute = require('./routes/gcApiRoute')

app.use(bodyParser.json())
app.use("/api", gcApiRoute)

const port = 3000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})