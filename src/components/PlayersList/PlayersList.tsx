import { useContext } from 'react';
import { GameContext } from '../../state/context';
import './PlayersList.css';

const PlayersList = () => {
  const { state } = useContext(GameContext);
  return (
    <div className="PlayersList">
      <h4>Players</h4>
      {state.players.map((player) => (
        <label>{player.name}</label>
      ))}
    </div>
  );
};

export default PlayersList;
