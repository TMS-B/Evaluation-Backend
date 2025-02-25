// Desc: Home page component

import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <h1>Page Homme</h1>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home
