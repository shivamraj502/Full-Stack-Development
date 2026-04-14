import { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>
      <p>Logged In: {user.isLoggedIn ? "Yes" : "No"}</p>

      <button onClick={() => setUser({...user, name: "Shivam Kumar"})}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;