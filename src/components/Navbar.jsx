import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#acerca">Acerca de</a>
                </li>
                <li>
                    <a href="#servicios">Servicios</a>
                </li>
                <li>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
