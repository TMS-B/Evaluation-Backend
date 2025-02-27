import winston from "winston";

const NODE_ENV = process.env.NODE_ENV;

const logger = winston.createLogger({
    level: NODE_ENV === "development" ? "debug" : "info",
    format: winston.format.combine(
            winston.format.colorize(),    // Ajoute des couleurs
            winston.format.timestamp(),   // Ajoute un timestamp
            winston.format.align(),       // Aligne les messages
            winston.format.prettyPrint(),       // Définit le format final
        
        winston.format.printf(({ level, message, timestamp }) => {
            const localTimestamp = new Date(timestamp).toLocaleString();
            return `${localTimestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Affiche les messages dans la console
        new winston.transports.File({ filename: "logs/all.log" }), // Enregistre les erreurs dans un fichier
    ],
});

export default logger;