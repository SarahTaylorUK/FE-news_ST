import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <Link to="/articles/topic/all">Articles</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Nav