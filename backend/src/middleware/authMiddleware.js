import JWT from 'jsonwebtoken';
import User from '../models/User.js';
const JWT_SECRET = process.env.JWT_SECRET;
export async function protect (req, res, next) {
    console.log(JSON.stringify(req.cookies));
    
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({ message: `Token manquant` });
        };

        const decoded = JWT.verify(token, JWT_SECRET);
        req.user = await User.findById(decoded._id);
        next();
    } catch (error) {
        next(error);
    }
};