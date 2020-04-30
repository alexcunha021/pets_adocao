const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const {rua, numero, bairro, whatsapp} = request.body
        const users_id = request.headers.authorization

        const contacts = await connection('contacts').insert({
            rua,
            numero,
            bairro,
            whatsapp,
            users_id
        })

        return response.json(contacts)
    },
    async index(request, response){
        const users_id = request.userId
        const contact = await connection('contacts').
        where('users_id', users_id).
        select('*').
        first()
 
        const {rua, numero, bairro, whatsapp} = contact

        return response.json({
            rua,
            numero,
            bairro,
            whatsapp
        })
    }
}