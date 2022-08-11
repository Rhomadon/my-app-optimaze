const { Router } = require("express")
const { postApi } = require("../controllers/gcApiControl.js")
const router = Router()

router.post("/v1", postApi)

module.exports = router