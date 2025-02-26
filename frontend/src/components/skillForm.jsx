import { useState } from "react";

const SkillForm = ({ initialData = {}, onSubmit, titre }) => {

  const [skill, setSkill] = useState({
    titre: initialData.titre || "",
    catégorie: initialData.catégorie || "",
    niveau: initialData.niveau || "",
    description: initialData.description || "",
  });

  const handleChange = () => {
    const { titre, value } = skill;
    setSkill((prev) => ({
      ...prev,
      [titre]: value,
    }));
  };

  const handleImageChange = (e) => {
    setSkill((prev) => ({
      ...prev,
      imageFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(skill);
  };

  return (
    <div>
      <h1>{titre}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titre">Titre</label>
          <input
            type="text"
            id="titre"
            value={skill.titre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="catégorie">Catégorie</label>
          <input
            type="text"
            id="catégorie"
            value={skill.catégorie}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input 
          type="file" 
          id="image" 
          onChange={handleImageChange}
          accept="image/*"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SkillForm;
