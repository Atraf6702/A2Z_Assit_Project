import React from 'react'
import Navbar from '../components/Navbar'





function Home() {
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return 'Morning';
    } else if (currentHour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  };

 
  const userName = 'Sam';

  return (

    <div>
      <Navbar/>
   
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
      
      <header className="text-center mb-6">
        <h1 className="lg:text-4xl font-bold text-gray-800">
          Good {getTimeOfDay()} Rescuer!
        </h1>
        <p className="lg:text-lg text-gray-600">How are you doing today, {userName}?</p>
      </header>

      <nav className="flex">
        <ul className="space-x-4">
          <li>
            <a
              href="/create-ticket"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Ticket
            </a>
          </li>
         
        </ul>
      </nav>
    </div> </div>
  );
}

export default Home;

