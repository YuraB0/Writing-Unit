import React, { useState } from 'react';
import Info from './Info';
import DataService from '../services/DataService';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await DataService.getGitHubUser(username);
    setUserData(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {userData && <Info user={userData} />}
    </div>
  );
}

export default App;