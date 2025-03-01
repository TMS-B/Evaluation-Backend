import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSkillById } from "../services/SkillService"

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const data = await getSkillById(id);
        setSkill(data);
      } catch (error) {
        console.error(`Error while fetching skill:`, error);
      }
    };
    fetchSkillDetails();
  }, [id]);
  if(!skill){
    return <h2>Loading...</h2>
  }
  const { titre, catégorie, image, timestamp, _id } = skill; // { title, description, imageUrl, createdAt, _id }
  const formatedDate = new Date(timestamp).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div style={styles.container}>
      <img src={ image } alt={ titre } style={styles.image} id="zoom" />
      <div style={styles.content}>
        <h2 style={styles.title}>{ titre }</h2>
        <p>{ catégorie }</p>
        <p><b>Publié le</b>{ formatedDate }</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default SkillDetails