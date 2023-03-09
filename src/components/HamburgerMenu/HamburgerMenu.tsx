import { Link } from "react-router-dom"


export const HamburgerMenu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Startsida</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/booking">Boka bord</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakta oss</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </>
    )
}