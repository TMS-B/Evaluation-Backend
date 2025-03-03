import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditPage = ({ initialData = {}, onSubmit, titre }) => {

  const location = useLocation();
  const skillData = location.state?.skill;
  // console.log(skillData);

  const [skill, setSkill] = useState({
    titre: skillData.titre || "",
    catégorie: skillData.catégorie || "",
    niveau: skillData.niveau || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
          <label htmlFor="catégorie">Catégorie</label>
          <input
            type="text"
            id="catégorie"
            name="catégorie"
            value={skill.catégorie}
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
            <option value="débutant">Débutant</option>
            <option value="intermédiaire">intermédiaire</option>
            <option value="expert">Expert</option>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPage;