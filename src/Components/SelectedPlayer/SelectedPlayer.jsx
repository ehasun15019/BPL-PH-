import React from 'react'
import { deleteIcon } from '../../assets/assets';

const SelectedPlayer = ({ purchasedPlayers, removePlayer }) => {
  // player remove handler
  const handleDelete = (player) => {
    removePlayer(player);
  };

  return (
    <div>
      {purchasedPlayers.map((player, idx) => (
        <div key={idx} className='flex justify-between items-center border-2 border-gray-300 rounded-lg px-5 my-3 mx-3'>
          <div className='card-section'>
            <div className="card card-side">
              <figure>
                <img
                  src={player["player-img"]}
                  alt={player["player-name"]} className='w-20 h-20 object-cover rounded-3xl' />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{player["player-name"]}</h2>
                <p>{player["playing-role"]}</p>
              </div>
            </div>
          </div>

          <div>
            <button className='' onClick={() => handleDelete(player)}>
              <img src={deleteIcon} alt="Delete" className='cursor-pointer' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SelectedPlayer