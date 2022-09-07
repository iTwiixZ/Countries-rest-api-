import DarkModeIcon from '@mui/icons-material/DarkMode';
function Header({ onClick, darkMode }) {
  return (
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
      <div className="header-container">
        <h2 className="logo">Where in the world</h2>
        <div className="switch_mode" onClick={onClick}>
          <DarkModeIcon />
          <h3>DarkMode</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
