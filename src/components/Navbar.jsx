import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#acerca">Nosotros</a>
                </li>
                <li>
                    <a href="#servicios">Nuestros cafés</a>
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
