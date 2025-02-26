import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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

export default mongoose.model("Settings", settingSchema);