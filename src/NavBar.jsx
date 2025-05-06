import { Link } from 'react-router-dom'
function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/planets/2">Mars</Link>
            <Link to="/planets/3">Venus</Link>
            <Link to="/stars/3">Orion Nebula</Link>
            <Link to="/galaxies/2">Andromeda Galaxy</Link>
        </nav>
    )
}

export default NavBar;