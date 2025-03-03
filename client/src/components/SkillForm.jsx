import { useState } from "react";

const SkillForm = ({ initialData = {}, onSubmit, titre }) => {

  const [skill, setSkill] = useState({
    titre: initialData.titre || "",
    categorie: initialData.categorie || "",
    niveau: initialData.niveau || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prev) => ({
      ...prev,
      [name]: value,
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
            name="titre"
            value={skill.titre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="categorie">Catégorie</label>
          <input
            type="text"
            id="categorie"
            name="categorie"
            value={skill.categorie}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="niveau">Niveau:</label>
          <select 
          name="niveau" 
          id="level"
          onChange={handleChange}
          required
          >
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Expert">Expert</option>
            </select> 
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
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default SkillForm;