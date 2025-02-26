import { v2 as cloudinary } from "cloudinary";
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const cloudinaryConfig = async () => {
    try {
        cloudinary.config({ 
            cloud_name: CLOUD_NAME, 
            api_key: API_KEY, 
            api_secret: API_SECRET 
        });
    } catch (error) {
        console.error(`Erreur de configuration cloudinary`);
    }
}

export default cloudinaryConfig;