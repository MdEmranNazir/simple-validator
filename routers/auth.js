const router = require('express').Router()
const User = require('../model/User')

//VALIDATION
const joi = require('@hapi/joi')

const schema = joi.object({
    name: joi.string()
        .min(6)
        .required(),
    gender: joi.string()
        .min(3)
        .required()
})


router.post('/register', async (req,res) => {

    //LETS VALIDATE THE DATA BEFORE WE A USER
    const {error} = schema.validate(req.body);
   if(error) return res.status(400).send(error.details[0].message)

    const user = new User({
        name: req.body.name,
        gender: req.body.gender
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        res.status(4000).send(error)
    }
})

module.exports = router;