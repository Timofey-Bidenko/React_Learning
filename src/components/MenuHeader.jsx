function MenuHeader({ username }) {
  return (
    <header>
      <div className="logo">PIZZA DAY</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for the order #"
      />
      <div className="username">
        {username ? username.toUpperCase() : "USERNAME"}
      </div>
    </header>
  );
}

export default MenuHeader;
