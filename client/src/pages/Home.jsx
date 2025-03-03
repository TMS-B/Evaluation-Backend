import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllSkills, deleteSkill } from "../services/SkillService";
import SkillCard from "../components/SkillCard";


const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getAllSkills();
        setSkills(data.skills);
      } catch (error) {
        console.error(`Error while fetching skills:`, error);
      }
    };
    fetchSkills();
  }, []);

const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this skill ?"
    );
    if (!isConfirmed) return;
    try {
      await deleteSkill(id);
      setSkills(skills.filter((skill) => skill._id !== id));
    } catch (error) {
      console.error(`Error while deleting skill:`, error);
    }
  };

  return (
    <div>
      <h1>Page Home</h1>
      <div style={styles.container}>
        <Link to={"/create"} style={styles.createLink}>
          Create new skill
        </Link>
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  createLink: {
    display: "inline-block",
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Home;