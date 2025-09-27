import React, { useState } from 'react'
import { flag, user } from '../../assets/assets';
import { toast } from 'react-toastify';

const PlayerCards = ({player, setBalance, purchasedPlayers, setPurchasedPlayers, balance}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    const price = Number(player.price);
    if (Number(purchasedPlayers.length) === 6) {
      toast("You have already 6 players");
      return;
    }
    if (balance < price) {
      toast("Not enough balance to buy this player!");
      return;
    }
    setIsSelected(true);
    setBalance(prev => prev - price);
    setPurchasedPlayers([...purchasedPlayers, player]);
  };

  return (
    <div key={player._id} className="card shadow-lg p-3">
      <figure>
        <img
          src={player["player-img"]}
          alt={player["player-name"]}
          className='rounded-lg h-60 object-cover'
        />
      </figure>

      <div className="card-bodies mt-3">
        <h2 className="card-title">
          <img src={user} alt="user" />
          {player["player-name"]}
        </h2>
    
        <div className="flex justify-between">
          <p className="flex gap-2 items-center">
            <img src={flag} alt="flag" />
            {player["player-country"]}
          </p>

          <button className="bg-gray-300 py-2 px-3 rounded-md text-[0.9rem]">
            {player["playing-role"]}
          </button>
        </div>
    
        <p className='my-2'>
          Rating: <span className="font-bold text-amber-400">{player.rating}</span>
        </p>

        <div className="flex justify-between my-2">
          <p>{player["bating-style"]}</p>
          <p>{player["balling-style"]}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p>
            <span className="font-bold">Price</span>: {player.price} USD
          </p>

          <button 
            disabled={isSelected} 
            onClick={handleSelect} 
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlayerCards
