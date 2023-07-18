import { Outlet, Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>pathfinder tools</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`encounter-calculator`}>Encounter Calculator</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header