import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";


export const Navbar = () => {
  const { favorites, removeFavorite } = useFavorites(); // Use it from context

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <img
          src="https://th.bing.com/th/id/R.e66dc830fed8ee8f65a589404818596b?rik=ok%2bqXIB9PpSK%2fw&riu=http%3a%2f%2fwww.clubdelcomic.com.ar%2fimage%2fcache%2fdata%2fstar-wars-logo-150x150.jpg&ehk=sksVZZ7l9g3UaP15mUJkzATQjhxg4dv3QsN5vJ5RydE%3d&risl=&pid=ImgRaw&r=0"
          style={{ width: "80px", height: "80px" }}
          alt="logo"
        />

        {/* Favorites Dropdown */}
        <div className="dropdown ms-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                <Link to={`/people/${item.id}`} className="me-2">
                  {item.name}
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFavorite(item.id)} // This is the correct usage
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </li>
            ))}
            {favorites.length === 0 && (
              <li className="dropdown-item text-muted">No favorites yet</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
