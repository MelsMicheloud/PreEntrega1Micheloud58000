import CartWidget from "./CartWidget/CartWidget"

const NavBar = ()=> {
    return (
        <nav>
            <h3>PetLovers</h3>
            <div>
                <button>Alimentación</button>
                <button>Accesorios</button>
                <button>Estética e Higiene</button>
                <button>Salud</button>
                <button>Ofertas!</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar