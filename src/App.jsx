import { Suspense, useState } from "react";
import Available from "./Components/AvailablePlayes/Available";
import Navbar from "./Components/Navbar";
import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer";
import { ToastContainer } from 'react-toastify';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const fetchPlayers = async () => {
  const res = await fetch('/public.json');
  const data = await res.json();
  return data;
}

// playersData একটি promise
const playersData = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(60000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  
  // delete player data function
  const deletePlayer = (d) => {
    const filteredPlayers = purchasedPlayers.filter((player) => {
      return player._id !== d._id
    });
    setPurchasedPlayers(filteredPlayers);

  setBalance(prev => prev + Number(d.price));
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar balance={balance}/>

        <Header/>

        <div className="flex justify-between items-center px-3 mt-5">
          <h1 className="font-bold text-[1rem] lg:text-2xl">{toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}</h1>

          <div className="">
              <button onClick={()=> setToggle(true)}  className={`cursor-pointer py-3 px-4 border-1 border-gray-400 rounded-l-lg border-r-0 text-black text-[0.9rem] lg:text-[1.2rem] ${toggle === true ? "bg-[#E7FF29]": "text-black"}`}>Available</button>

              <button onClick={()=> setToggle(false)} className={`cursor-pointer py-3 px-4 border-1 border-gray-400 rounded-r-lg border-l-0 text-black text-[0.9rem] lg:text-[1.2rem] ${toggle === false ? "bg-[#E7FF29]": "text-black"}`}>
              Selected <span>({purchasedPlayers.length})</span>
              </button>
          </div>
        </div>


        {
          toggle === true ?  
            <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
              <Available purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} setBalance={setBalance} playersData={playersData} balance={balance}/>
            </Suspense> : <SelectedPlayer purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} removePlayer={deletePlayer} />
        }
      </div>
      
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
