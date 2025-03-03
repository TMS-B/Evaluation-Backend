import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: `${API_URL}/api/skills`,
});

export const getAllSkills = async () => {
    const res = await api.get("/allSkills");
    return res.data;
}

export const deleteSkill = async (id) => {
    const res = await api.delete(`/deleteSkills/${id}`, {withCredentials: true});
    return res.data;
}

export const getSkillById = async (id) => {
    const res = await api.get(`/${id}`);
    return res.data;
}

export const createSkill = async (skill) => {
    const formData = new FormData();
    formData.append("titre", skill.titre);
    formData.append("categorie", skill.categorie);
    formData.append("niveau", skill.niveau);
    formData.append("description", skill.description);
    if(skill.imageFile){
        formData.append("imageFile", skill.imageFile);
    }
    const res = await api.post("/createSkill", formData);
    return res.data;
}

export const updateSkill = async (id, skill) => {
    const formData = new FormData();
    formData.append("titre", skill.titre);
    formData.append("categorie", skill.categorie);
    formData.append("niveau", skill.niveau);
    formData.append("description", skill.description);
    if(skill.imageFile){
        formData.append("imageFile", skill.imageFile);
    }
    const res = await api.put(`/updateSkills/${id}`, formData, {withCredentials: true});
    return res.data;
}