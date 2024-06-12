const mongoose = require('./database');

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    nazwa: {
        type: String,
        required: true,
        unique: true
    },
    sciezka: String,
    rozmiar: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
