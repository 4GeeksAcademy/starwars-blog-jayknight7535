import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
			     <img src="https://th.bing.com/th/id/R.e66dc830fed8ee8f65a589404818596b?rik=ok%2bqXIB9PpSK%2fw&riu=http%3a%2f%2fwww.clubdelcomic.com.ar%2fimage%2fcache%2fdata%2fstar-wars-logo-150x150.jpg&ehk=sksVZZ7l9g3UaP15mUJkzATQjhxg4dv3QsN5vJ5RydE%3d&risl=&pid=ImgRaw&r=0" style={{width: "80px", height: "80px"}}alt="..."/>
				<div class="dropdown">
            		<button class="btn btn-secondary dropdown-toggle justify-content-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					favorites
  					</button>
  						<ul class="dropdown-menu">
    						<li><a class="dropdown-item" href="#">Action</a></li>
    						<li><a class="dropdown-item" href="#">Another action</a></li>
    						<li><a class="dropdown-item" href="#">Something else here</a></li>
 						</ul>
				</div>
					
			</div>
		</nav>
	);
};