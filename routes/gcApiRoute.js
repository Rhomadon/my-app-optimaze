const { Router } = require("express")
const { postApi } = require("../controllers/gcApiControl.js")
const router = Router()

router.post("/api", postApi)

module.exports = router