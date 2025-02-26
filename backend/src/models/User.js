import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:  { type: String, required: true, select: false },
    role: { type: String, enum: [ "user", "admin" ], default: "user" },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
      }]
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model("User", userSchema)