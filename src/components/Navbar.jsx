const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <div>
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/movies">Film</a>
                </div>

                <div className="d-flex">
                    <input type="search" className="form-control me-2" placeholder="Cerca" />
                    <button className="btn btn-outline-light">Cerca</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;