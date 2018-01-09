const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.

const rankingSchema = new Schema({
    rank: String,
    type: String,
    rating: Number,
    gamesPlay: Number,
    topPercentile: Number,
    rankImage: String
})

const gamerSchema = new Schema({
   displayName: String,
   lastUpdated: Number,
   rankings: [rankingSchema],
   stats: Object
})

const Gamer = mongoose.model('Gamer', gamerSchema, 'gamers');

module.exports = Gamer;
