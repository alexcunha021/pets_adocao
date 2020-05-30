const connection = require('../database/connection')

module.exports = {
    async store(request, response){
        const users_id = request.headers.authorization
        const {originalname:avatar, key: avatar_path} = request.file
        const [id] = await connection('avatar').insert({
            avatar,
            avatar_path,
            users_id
        })

        response.json({ message: 'Cadastro'})
    },
    async index(request, response){
        const path_url = process.env.URL
        const users_id = request.userId
        const avatars = await connection('avatar').where('users_id', users_id).select('*').first()
        const  { avatar, avatar_path } = avatars
        const url =  `${path_url}/pets/${encodeURIComponent(avatar_path)}`
        
        response.json({avatarUser: {
            url
        }})
    }
}