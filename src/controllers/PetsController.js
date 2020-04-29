const connection = require('./../database/connection')
const PestsLocations = require('./../models/PetsLocations')

module.exports = {
    async create(request, response){
        const { name_pet, age, description,  latitude,longitude} = request.body 
        const users_id = request.headers.authorization
        const {originalname:avatar_pets, key: avatar_path} = request.file
      
       
        const [id] = await connection('pets').insert({
            name_pet,
            age,
            description,
            avatar_pets,
            avatar_path,
            users_id
        })
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
        const {_id} = await PestsLocations.create({
            users_id,
            location
        })
        return response.json({ id, _id })

    },
    async index(request, response){
        const users_id = request.userId
        const pets = await connection('pets').where('users_id', users_id).select('*')
        const {id, age,name_pet, description, avatar_pets, avatar_path} = pets[0]
        const url =  `http://localhost:3333/pets/${encodeURIComponent(avatar_path)}`

        const {_id, location} = await PestsLocations.findOne({users_id})
        const latitude = location.coordinates[1]
        const longitude = location.coordinates[0]
        return response.json({
            id,
            name_pet,
            age,
            description,
            avatar_pets,
            url,
            _id,
            latitude,
           longitude
        })


    }
}

