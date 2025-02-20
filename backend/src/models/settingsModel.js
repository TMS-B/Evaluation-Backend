const mongoose = require('mongoose');
const User = require('./User');

const settingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    preferences: {
        type: Object,
        default: {}
    },
    cookiesAccepted: {
        type: Boolean,
        default: false
    },
    cookieTypes: {
        type: [String],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("Settings", settingSchema);