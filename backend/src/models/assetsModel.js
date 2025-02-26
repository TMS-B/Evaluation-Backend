import {mongoose } from 'mongoose';

const mediaSchema = new mongoose.Schema({
    title: String,
    description: String,
    public_id: String,
    url: String,
});

export default mongoose.model("mediaSchema", mediaSchema)