const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    date : {
        type: Date,
    },
    descriptionn: {
        type: String
    },
    title: {
        type: String
    }
})


const EventModel = model('Event', eventSchema );

module.exports = { eventSchema, EventModel }
