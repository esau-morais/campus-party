const Company = require('../models/Company');


module.exports = {
  async index (request, response){
    try{
      const companys = await Company.find();
     
      return response.send({companys})
      
    }catch(err){
      return response.status(400).send({error: 'Error loading Companys.'})
    }
  },

  async create (request, response){ 
    try{
      const company = await Company.create(request.body);
     
      return response.status(201).json(company);
      

    }catch(err){
      console.log(err);
      return response.status(400).send({error: 'Error creating new Company'})
    }
         
  },

  async test (request, response){ 
    return response.json({message: 'test'})
  }

}