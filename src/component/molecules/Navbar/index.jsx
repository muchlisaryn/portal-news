import Logo from "../../atoms/Logo";

export default function Navbar({ setValue, onClick }) {
  const search = (e) => {
    setValue(e.target.value);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Logo />
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
