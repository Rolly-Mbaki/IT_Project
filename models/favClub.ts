export{}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favClubSchema = new Schema({
    naam: {
        type: String,
        required: true
    },
    league: {
        type: Number,
        required: true
    },
    clubID: {
        type: Number,
        required: true
    }
})

const FavClub = mongoose.model('FavClub', favClubSchema)

module.exports = FavClub