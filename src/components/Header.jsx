function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", padding: "1rem", color: "white" }}>
      <h1>My React Practice</h1>

      <Link to="/profile" style={{ margin: "0 10px" }}>Profile</Link>

    </header>
  );
}

export default Header;
