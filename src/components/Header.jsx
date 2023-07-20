import { Outlet, Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <header className= "d-flex flex-column align-items-center logo">
            <h1 className="logo--txt">Pathfinder Tools</h1>
            <nav>
                <ul className = "d-flex flex-row justify-content-center gap-4 nav--links">
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/encounter-calculator`}>Encounter Calculator</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header