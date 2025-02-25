exports.adminCheck = async (req, res, next) => {
    try {
        if(req.user.role === "admin"){
            next();
        }else{
          return res.status(401).json({ message: `Vous n'êtes pas admin` })  
        }
    } catch (error) {
        next(error);
    }
};