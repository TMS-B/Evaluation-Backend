import Settings from '../models/settingsModel.js';

export const getSettings = async (res, req, next) => {
    try {
        const settings = await Settings.findOne({ userId: req.params.userId });

        if(!settings) {
            return res.status(400).json({ message: `Préférences introuvable` });
        }
        return res.json(settings);
    } catch (err) {
        next(err);
    }
};

export const updateSettings = async (res, req, next) => {
    const { preferences, cookiesAccepted, cookieTypes } = req.body;

    try {
        const settings = await Settings.findOne({ userId: req.params.userId });
        if(!settings){
            settings = new Settings({
                userId: req.params.userId,
                preferences,
                cookiesAccepted,
                cookieTypes
            });
        }else {
            settings.preferences = preferences || settings.preferences;
            settings.cookiesAccepted = cookiesAccepted != undefined ? cookiesAccepted : settings.cookiesAccepted;
            settings.cookieTypes = cookieTypes || settings.cookieTypes;
        }

        await settings.save();
        return res.status(200).json({ message: `Préférences mises à jour` })
    } catch (err) {
        next(err);
    }
}