
import { Link } from "react-router-dom"


export default function Login() {
    
  return (
    <div className='display-flex flex-row py-[20vh] px-[40vh]'>
    <form class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        <Link to='/'>
        Sign In
        </Link>  
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="_blank">
          Forgot Password?
        </a>
      </div>
    </form>
    </div>
  
  )
}
