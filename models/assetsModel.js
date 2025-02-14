const { default: mongoose } = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: String,
    description: String,
    public_id: String,
    url: String,
});

module.exports = mongoose.model("mediaSchema", mediaSchema)