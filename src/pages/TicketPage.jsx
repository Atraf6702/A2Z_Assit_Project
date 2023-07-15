import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function TicketPage() {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegNumber, setVehicleRegNumber] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState('');
  const [comments, setComments] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      leadSource === '' ||
      name === '' ||
      contactNumber === '' ||
      email === '' ||
      vehicleMake === '' ||
      vehicleRegNumber === '' ||
      breakdownIssue === '' ||
      location === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }

  
    setIsFormSubmitted(true);
  };

  const handleReset = () => {
    setLeadSource('');
    setName('');
    setContactNumber('');
    setEmail('');
    setVehicleMake('');
    setVehicleRegNumber('');
    setBreakdownIssue('');
    setLocation('');
    setServiceFee('');
    setAssistanceTime('');
    setComments('');
    setIsFormSubmitted(false);
  };

  return (

    <div><Navbar/>
    <div className="bg-gray-100 min-h-screen pt-5 flex flex-col items-center justify-center">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">New Ticket</h1>
      </header>

      {isFormSubmitted ? (
        <div className="bg-white w-64 p-8 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">New Task Created Successfully</h2>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleReset}
          >
            Create Another Task
          </button>
        </div>
      ) : (
        <form
          className="bg-white w-[80vw] p-8 rounded shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leadSource">
              Lead Source
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="leadSource"
              value={leadSource}
              onChange={(e) => setLeadSource(e.target.value)}
            >
              <option value="">Select Lead Source</option>
              <option value="Web">Web</option>
              <option value="Chat">Chat</option>
              <option value="Call">Call</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactNumber"
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleMake">
              Vehicle Make
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vehicleMake"
              type="text"
              value={vehicleMake}
              onChange={(e) => setVehicleMake(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleRegNumber">
              Vehicle Registration Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vehicleRegNumber"
              type="text"
              value={vehicleRegNumber}
              onChange={(e) => setVehicleRegNumber(e.target.value.toUpperCase().replace(/\s/g, ''))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breakdownIssue">
              Breakdown Issue
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="breakdownIssue"
              type="text"
              value={breakdownIssue}
              onChange={(e) => setBreakdownIssue(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceFee">
              Service Fee
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="serviceFee"
              type="text"
              value={serviceFee}
              onChange={(e) => setServiceFee(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assistanceTime">
              Assistance Time
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assistanceTime"
              type="text"
              value={assistanceTime}
              onChange={(e) => setAssistanceTime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">
              Comments
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comments"
              rows="3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div></div>
  );
}

export default TicketPage;
