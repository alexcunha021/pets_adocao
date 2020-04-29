const mongoose = require('mongoose')
const PointSchema = require('./../util/PointSchema')

const UserSchema = new mongoose.Schema({
    users_id: {
        type: Number,
        required: true
    },
    
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    
})

module.exports = mongoose.model('PestsLocations', UserSchema)