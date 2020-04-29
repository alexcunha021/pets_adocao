const multer = require("multer")
const path = require('path')
const crypton = require('crypto')
module.exports = {
    desc: path.resolve(__dirname, '..', '..', 'temp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null,   path.resolve(__dirname, '..', '..', 'temp'))
        },
        filename: (req, file, cb) => {
            crypton.randomBytes(16, (erro, hash) => {
                if(erro) cb(erro)
                file.key =  `${hash.toString('hex')}-${file.originalname}`
                cb(null, file.key)
            })
        }
    })
}