const router = require('express').Router()
const Users = require("../models/Users")

router.get("/", async (req,res) => {
    await Users.findAll().then((users) => {
        res.json({
            status: 200,
            users
        })
    })
})


module.exports = router