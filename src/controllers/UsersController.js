const connection = require('./../database/connection')
module.exports = {
 async create(request, response){
      
    
       const {name, email, last_name, password} = request.body
       const user = await connection('users').insert({
        name,
        last_name,
        email,
        password
      })

      return response.json(user)
    
  },

  async index(request, response){
    
   const id = request.userId
   const users = await connection('users').where('id', id).select(['name','last_name' , 'email'])
   return response.json(users)
  }
}

