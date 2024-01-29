import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Home = () => <div>This is the Home page</div>;
const About = () => <div>This is the About page</div>;
const Contact = () => <div>This is the Contact page</div>;

const App = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{ position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="About" icon={<FavoriteIcon />} component={Link} to="/about" />
        <BottomNavigationAction label="Contact" icon={<FavoriteIcon />} component={Link} to="/contact" />
      </BottomNavigation>
    </Router>
  );
};

export default App;
