const connection = require('./../database/connection')
module.exports = {
 async create(request, response){
      
    
    const {name, email, password} = request.body
     
        const user = await connection('users').insert({
        name,
        email,
        password
      })

      return response.json(user)
    
  },

  async index(request, response){
    
    const id = request.userId
   
   const users = await connection('users').where('id', id).select(['name', 'email'])
   return response.json(users)


}
}

