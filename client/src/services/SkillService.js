import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3101/api/skills",
});

export const getAllSkills = async () => {
    const res = await api.get("/allSkills");
    return res.data;
}

export const deleteSkill = async (id) => {
    const res = await api.delete(`/deleteSkills/:id${id}`);
    return res.data;
}

export const getSkillById = async (id) => {
    const res = await api.get(`/${id}`);
    return res.data;
}

export const createSkill = async (skill) => {
    const formData = new FormData();
    formData.append("titre", skill.titre);
    formData.append("catégorie", skill.catégorie);
    formData.append("niveau", skill.niveau);
    formData.append("description", skill.description);
    if(skill.imageFile){
        formData.append("imageFile", skill.imageFile);
    }
    const res = await api.post("/createSkill", formData);
    return res.data;
}