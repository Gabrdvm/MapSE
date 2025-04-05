import { Link } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
    return (
        <>
            <div className="d-flex">
                {/* Sidebar */}
                <nav className="sidebar vh-100 position-fixed">
                    <div className="p-1">
                        <h1 className=" brand text-center">
                            <img src="src\assets\JayaLoka_Tlogo.png" alt="Logo" />
                            <h1 className="text-brand me-2">JayaLoka</h1>
                        </h1>
                    </div>

                    <div className="profile-container">
                        <div className="profile-picture">
                            <img src="src/assets/marin2.jpg" alt="photo" />
                        </div>

                        <div className="text-profile me-2">
                            <p>Selamat Datang Marin Kitagawa!</p>
                        </div>
                    </div>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" className="nav-link">Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorite" className="nav-link">Favorite</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/feedback" className="nav-link">Feedback</Link>
                        </li>
                    </ul>


                    <div className="mt-auto p-3">
                        <a href="" className="btn btn-primary w-100">
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar