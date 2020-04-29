const PestsLocations = require('./../models/PetsLocations')

module.exports = {
    async index(request, response){
        const local = await PestsLocations.find()
        return response.json(local)
    }
}