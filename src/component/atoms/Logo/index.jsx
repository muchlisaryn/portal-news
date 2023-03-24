import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="https://eduwork.id/assets/favicon.png"
        alt="logo"
        className="navbar-brand"
        style={{ width: 150 }}
      />
    </Link>
  );
}
