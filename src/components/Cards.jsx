import React from "react";

const Card = ({ user, onClick }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg p-4">
    <img className="w-full h-40 object-cover" src={user.avatar} alt={user.first_name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
      <p className="text-gray-700 text-base">{user.title}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => onClick(user)}
      >
        View Details
      </button>
    </div>
  </div>
);

export default Card;
