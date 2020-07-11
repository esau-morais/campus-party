const mongoose = require('mongoose');


const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  phone: {
    type: String,
  },

  cel: {
    type: String,
  },

  CNPJ: {
    type: String,
    required: true,
    unique: true,
  },

  port: {
    type: String,
    required: true,
  },

  analyses: [{
    result: {
      type: Boolean,
    
    },
    rating: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    }
  }],

  createdAt: {
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model('Company', CompanySchema);