import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";
import DetailsPage from "./DetailsPage";

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
    return (
      <DetailsPage/>
    );
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

export default MainPage;
