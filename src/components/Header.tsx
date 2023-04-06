import { Outlet, Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">ToDo</Link>
                    </li>
                    <li>
                        <Link to="/playground">Playground</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

