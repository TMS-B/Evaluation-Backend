const errorHandler = (err, req, res, next) => {
    console.error(`errorHandler: ${ err.stack }`)
    const statusCode = err.status || 500;
    const message = err.message || "Erreur interne du serveur";
    const errorCode = err.code || "SERVER_ERROR"
    res.status(statusCode).json({ success: false, message, error: errorCode, stack: err.stack });
};
export default errorHandler;