const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// const { customerSchema } = require('./Customer');


const eventSchema = new Schema({
  date : {
      type: Date,
  },
  description: {
      type: String
  },
  title: {
      type: String
  },
  eventPhoto: {
    type: String
  }
})


const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  associatedCustomer: {
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
        type: Number,
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
  timeline: [eventSchema],
  
  photos: [
    {
      link: { type: String },
      linkb: { type: String }
    }
  ]
  
  

});


const Event = model('Event', eventSchema );

const Project = model('Project', projectSchema);


module.exports = Project, Event ;
