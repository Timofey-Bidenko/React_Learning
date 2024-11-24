const Header = ({ classes, text }) => {
  return (
    <header>
      <div className={classes}>{text}</div>
    </header>
  );
};

export default Header;
