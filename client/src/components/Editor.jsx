import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditPage = ({ initialData = {}, onSubmit, titre }) => {
  const location = useLocation();
  const skillData = location.state || {};
  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    _id: skillData._id || "",
    titre: skillData.titre || "",
    categorie: skillData.categorie || "",
    niveau: skillData.niveau || "",
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
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(skill._id, skill);
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
          <select name="niveau" id="level" onChange={handleChange} required>
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
        <p>Dernière modification: {skillData.updatedAt} </p>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default EditPage;
