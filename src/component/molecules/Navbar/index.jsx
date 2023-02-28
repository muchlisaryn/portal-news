import Logo from "../../atoms/Logo";

export default function Navbar({ setValue }) {
  const search = (e) => {
    setValue(e.target.value);
  };

  const searchClick = (e) => {
    e.preventDefault();
    alert("Ga bisa di klik");
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
          <button className="btn btn-primary" onClick={searchClick}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
