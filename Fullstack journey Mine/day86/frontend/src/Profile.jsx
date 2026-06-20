import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/profile", {
          headers: {
            authorization: token
          }
        });

        setUser(res.data.user);
      } catch {
        alert("Unauthorized");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container">
      <h1>Profile</h1>
      {user ? <h2>{user.email}</h2> : <p>Loading...</p>}
    </div>
  );
}

export default Profile;