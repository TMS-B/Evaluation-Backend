import SkillForm from "../components/SkillForm"
import { createSkill } from "../services/SkillService"
import { useNavigate } from "react-router-dom"

const createSkillPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (skill) => {
    try {
      await createSkill(skill);
      navigate("/");
    } catch (error) {
      console.error(`Error while creating skill:`, error);
    }
  }
  return (
    <div>
      <SkillForm onSubmit={handleSubmit} title="Ajouter une nouvelle competence" />
    </div>
  )
};


export default createSkillPage
