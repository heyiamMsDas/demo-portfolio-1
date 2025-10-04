

import { Link } from "react-router-dom";

function Navbar() {

    return (
         
        <nav className="Navbar">
            <p>hello</p>
            <Link to="/">Home</Link>
            <Link to="Study">Study</Link>
            <Link to="Hobby">Hobby</Link>
            <Link to="Developer">Developer</Link>
        </nav>

    ) ;


}

export default Navbar ;