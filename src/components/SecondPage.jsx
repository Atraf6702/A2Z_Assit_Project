import React, { useState, useEffect } from "react";
import axios from "axios";


const Card = ({ user, onClick }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg p-4">
    <img className="w-full h-40 object-cover" src={user.avatar} alt={user.first_name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
      <p className="text-gray-700 text-base">{user.title}</p>
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={() => onClick(user)}
    >
      View Details
    </button>
  </div>
);

const MainPage = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://random-data-api.com/api/v2/users", {
        params: { size: 10 },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = (user) => {
    
    console.log("Clicked on user:", user);
    
  };

  const handleFetchUsersClick = () => {
    fetchUsers();
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} user={user} onClick={handleCardClick} />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleFetchUsersClick}
      >
        Fetch Users
      </button>
    </div>
  );
};
export default MainPage;;

