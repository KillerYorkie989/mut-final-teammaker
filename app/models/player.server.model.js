var mongoose = require("mongoose"), Schema = mongoose.Schema;

var PlayerSchema =  new Schema({
    name: {
        type: String,
        required: 'Must input a Player Name'
    },
    overallRating: {
        type: Number,
        required: 'Must input an Overall Rating'
    },
    position: {
        type: String,
        required: 'Must input a position'
    },
    speed: {
               type: Number,
               required: 'Must input an Speed Rating'
    },
    awareness: {
                type: Number,
        required: 'Must input an Awareness Rating'
    },
    strength: {
                type: Number,
        required: 'Must in a Strength Rating'
    },
    agility: {
                type: Number,
        required: 'Must input an Agility Rating'
    }
});

PlayerSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

mongoose.model('Player', PlayerSchema);