import React from 'react';

function Info({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}

export default Info;