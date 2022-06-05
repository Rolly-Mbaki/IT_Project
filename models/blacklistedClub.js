const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blacklistedClubSchema = new Schema({
    BLnaam: {
        type: String,
        required: true
    },
    BLleague: {
        type: Number,
        required: true
    },
    BLclubID: {
        type: Number,
        required: true
    },
    BLreason: {
        type: String,
        required: true
    }
})

const BlacklistedClub = mongoose.model('BlacklistedClub', blacklistedClubSchema)

module.exports = BlacklistedClub