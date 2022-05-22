import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RecipeList from './components/RecipeList';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

function App() {
  const [user, setUser] = useState('');
  const [userpage, setUserpage] = useState(false);

  function onLogin(user) {
    setUser(user);
  }

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    fetch('/logout', {
      method: 'DELETE',
    });
    setUser('');
  }

  function onUserpageClick() {
    setUserpage(true);
  }

  function onHomeClick() {
    setUserpage(false);
  }

  return (
    <div className="body">
      <BrowserRouter>
        <NavBar
          user={user}
          handleLogout={onLogout}
          onLogin={onLogin}
          handleUserpageClick={onUserpageClick}
          handleHomeClick={onHomeClick}
        />
        {user ? (
          <Routes>
            <Route path="/" element={<RecipeList user={user} />} />
            <Route
              path="/userpage"
              element={<UserPage userpage={userpage} user={user} />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
