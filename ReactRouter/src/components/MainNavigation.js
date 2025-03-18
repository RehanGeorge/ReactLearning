import { Link } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"/></li>
                    <li><Link to="/products"/></li>
                </ul>
            </nav>
        </header>
    );
}