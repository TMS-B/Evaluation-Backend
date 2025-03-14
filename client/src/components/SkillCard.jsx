import { Link } from "react-router-dom"

  const SkillCard = ({ skill, onDelete }) => {
    const { titre, categorie, image, niveau, createdAt, _id } = skill;
    
    const formatDate = new Date(createdAt).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div style={styles.card}>
      <img src={ image.url } alt={ titre } style={styles.image} id="zoom" />
      <div style={styles.content}>
        <h2 style={styles.title}>{ titre }</h2>
        <p>{ categorie }</p>
        <p>{ niveau }</p>
        <p><b>Publié le </b>{ formatDate }</p>
        <p><b>Modifié le </b>{ formatDate }</p>
        <div>
          <button style={styles.deleteButton} onClick={ () => {onDelete(_id)} }>Supprimer</button>
          <Link to="/edit" state={ skill } style={styles.detailButton}>Modifier</Link>
          <Link to={`/dashboard`} style={styles.detailButton}>Voir les détails</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '15px',
    padding: '10px',
    maxWidth: '800px',
    backgroundColor: 'black',
    color: 'white',
  },
 
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '15px',
  
  },
  content: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e63946',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  detailButton: {
    display: 'inline-block',
    marginLeft: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  buttons: {
    marginTop: '10px',
  }
};

export default SkillCard
