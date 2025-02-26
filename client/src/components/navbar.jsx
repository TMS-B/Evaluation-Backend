import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav style={styles.nav}>
        <ul style={styles.navList}>
            <li style={styles.navItem}>
                <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
                <Link to="/create" style={styles.navLink}>Create Skills</Link>
            </li>
            <li style={styles.navItem}>
                <Link to="/login" style={styles.navLink}>Login</Link>
            </li>
        </ul>
    </nav>
  )
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginRight: '1rem',
    },
    navLink: {
        color: '#fff',        
        textDecoration: 'none',
        fontSize: '1.2rem',        
        fontWeight: 'bold',        
        textTransform: 'uppercase',        
        letterSpacing: '0.1rem',
    }
};

export default navbar
