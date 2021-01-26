const express = require('express')
const fs = require('fs')
const qualificationRouter = express.Router()
qualificationRouter.get('', async(req, res) =>{
    res.render('qualifications')
})

module.exports = qualificationRouter