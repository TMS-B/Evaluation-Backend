import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [ isAuth, setIsAuth ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userIsAuthenticated = localStorage.getItem("isAuth") === "true"; // Vérifier si l'utilisateur est authentifié
            setIsAuth(userIsAuthenticated); //  Mettre à jour l'état
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isAuth");  // Supprimer le token de connexion
        setIsAuth(false);   // Mettre à jour l'état
        navigate("/login"); // Rediriger vers la page de connexion
    };

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
                <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
            </li>
            <li style={styles.navItem}>
                { isAuth ? (        // Si l'utilisateur est authentifié
                    <button style={styles.navLink} onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login" style={styles.navLink}>Login</Link>
                )}
            </li>
        </ul>
    </nav>
  );
};

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

export default Navbar
