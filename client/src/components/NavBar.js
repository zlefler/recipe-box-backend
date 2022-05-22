import Login from './Login';
import { Link, useLocation } from 'react-router-dom';
import { Typography, Button } from 'antd';

function NavBar({
  user,
  onLogin,
  handleLogout,
  handleUserpageClick,
  handleHomeClick,
}) {
  const { Title } = Typography;
  const location = useLocation();
  return (
    <div className="navbar-div">
      <Link to="/" onClick={handleHomeClick}>
        <Title>Recipe Box</Title>
      </Link>
      {user && (
        <div>
          <Link to="/">
            <Button className="logout-button" onClick={handleLogout}>
              Logout
            </Button>
          </Link>
          <Title className="greeting" level={2}>
            {user && `Hello, ${user.username}!`}
          </Title>
          {location.pathname !== '/userpage' && (
            <div>
              <Link to="/userpage" onClick={handleUserpageClick}>
                <Title level={3}>Go To Saved Recipes</Title>
              </Link>
            </div>
          )}
        </div>
      )}
      {!user && location.pathname !== '/signup' && (
        <div>
          <label htmlFor="Login">Login here!</label>
          <Login id="Login" onLogin={onLogin} />
          <Link to="/signup">Sign Up Here</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
