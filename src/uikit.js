import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useHistory } from 'react-router-dom'; // Import from React Router

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const history = useHistory(); // Access the history object for navigation

  const handleActionClick = (index) => {
    // Perform actions based on the clicked index
    switch (index) {
      case 0:
        history.push('/home'); // Navigate to the '/home' route
        break;
      case 1:
        history.push('/explore'); // Navigate to the '/explore' route
        break;
      case 2:
        history.push('/favorites'); // Navigate to the '/favorites' route
        break;
      case 3:
        history.push('/account'); // Navigate to the '/account' route
        break;
      default:
        break;
    }
    setValue(index);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => handleActionClick(0)} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} onClick={() => handleActionClick(1)} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={() => handleActionClick(2)} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} onClick={() => handleActionClick(3)} />
    </BottomNavigation>
  );
}