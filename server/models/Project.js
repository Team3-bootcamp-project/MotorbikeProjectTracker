const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { eventSchema } = require('./Event');
const { clientSchema } = require('./Client');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  associatedClient: {
    type: String,
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
      },
      suspension: {
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
  timeline: [eventSchema]

});

const Project = model('Project', projectSchema);


module.exports = Project;
