const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: 'Name the project!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  clientName: {
    //Link to Client Schema
    required: true,
    trim: true,
  },
  startedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  bikeSpecs: [
    {
      bikeYear: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      bikeMake: {
        type: String,
        required: true,
      },
      bikeModel: {
        type: String,
        required: true,
      },
      
    },
  ],
  workToBeDone: [
    {
      cosmetic: {
        type: String,
      },
      engineWork:{
        type: String
      },
      brakes: {
        type: String
      },
      electric: {
        type: String
      }

    }
  ],
  estimatedCost: {
    type: Number,
    required: true,
  },
  estimatedTime: {
    type: Date,
    required: false
  },
  //timeline???


});

const Project = model('Project', projectSchema);

module.exports = Project;
