const express = require('express')
const multer = require('multer')
const usersControllers = require('./controllers/UsersController')
const localControllers = require('./controllers/LocalController')
const sessionControllers = require('./controllers/SessionController')
const petsControllers = require('./controllers/PetsController')
const ContantsController = require('./controllers/ContantsController')
const UserAvatarController = require('./controllers/UserAvatarController')

const authMiddleware = require('./middlewares/auth')
const routes = express.Router()

const multerConfiguer = require('./config/multer')
const upload = multer(multerConfiguer)

routes.post('/users',usersControllers.create)
routes.post('/contacts',ContantsController.create)
routes.post('/avatars', upload.single('file'),UserAvatarController.store)
routes.post('/session', sessionControllers.store)
routes.use(authMiddleware)
routes.get('/users',usersControllers.index)
routes.get('/contacts',ContantsController.index)
routes.get('/avatars', UserAvatarController.index)
routes.post('/pets', authMiddleware,upload.single('file'), petsControllers.create)
routes.get('/pets', petsControllers.index)
routes.get('/local', localControllers.index)



module.exports = routes