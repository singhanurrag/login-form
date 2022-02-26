import './App.css';
import Tilt from 'react-parallax-tilt';

function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
       <div className='h-45-r w-45-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/4 -top-96 animate-pulse'></div>
       <div className='h-50-r w-50-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-pulse'></div>

       <Tilt>
       <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
       {/*<div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">*/}
          <form className='h-full flex flex-col justify-evenly items-center'>
              <div className="font-poppins text-white text-2xl tracking-wider">Login form</div>
              <input type="text" placeholder='username' className='font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wider'/>
              <input type="password" placeholder="password" className='font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wider'/>
              <input type="submit" className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80'/>
          </form>
       </div>
       </Tilt> 
       
    </div>
  );
}

export default App;
