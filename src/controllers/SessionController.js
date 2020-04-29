const connection = require('../database/connection')
const jwt = require('jsonwebtoken')
const authConfig = require('./../config/auth')
module.exports = {
    async store(request, response){
     const {password, email} = request.body
     
    const existUser = await connection('users').where('email', email).select('email').first()
    if(!existUser){
        return response.status(401).json({messagem: 'E-mail não existe'})
    }
    const users = await connection('users').where('email', email)
    .andWhere('password', password).select('*').first()
    

    if(!users){
        return response.status(404).json({messagem: 'Senha ou E-mail invalido!'})
    }
    const {id, name} = users
     return response.json({user:
        {
            id,
            name,
            email
        },
        token: jwt.sign({id},authConfig.secret,
        {
            expiresIn:'7d'
        })
        })
    }
}