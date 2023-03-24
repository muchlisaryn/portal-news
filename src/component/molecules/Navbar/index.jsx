import { NavLink } from "react-router-dom";
import Logo from "../../atoms/Logo";

export default function Navbar({ setValue, onClick }) {
  const search = (e) => {
    setValue(e.target.value);
  };

  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "" : "black",
      textDecoration: isActive ? "" : "none",
    };
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Logo />
        <div className="w-25 d-flex justify-content-between ">
          <NavLink to="/tech" style={navActive}>
            Tech
          </NavLink>
          <NavLink to="/Lifestyle" style={navActive}>
            Lifestyle
          </NavLink>
          <NavLink to="/Politic" style={navActive}>
            Politic
          </NavLink>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={search}
          />
          <button className="btn btn-primary" onClick={onClick}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
