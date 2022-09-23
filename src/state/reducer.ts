import { ActionType, GameActions } from "./actions";
import { getGameStatus, getWinner } from "./helpers";
import { GameState, initialGameState, Player, Status } from "./state";

export function gameReducer(state: GameState, action: GameActions): GameState {
  switch (action.type) {
    case ActionType.AddPlayer:
      return {
        ...state,
        players: [
          action.payload,
          ...state.players
        ]
      }
    case ActionType.ResetGame:
      return {
        ...initialGameState,
        players: state.players.map((player: Player) => ({
          ...player,
          status: Status.NotStarted,
          value: 0,
        }))
      }
    case ActionType.SetPlayerValue:
      let newState = {
        ...state,
        players: state.players.map((player: Player) => 
          player.id === action.payload.id
          ? {
            ...player,
            value: action.payload.value,
            status: Status.Finished,
          }
          : player
        )
      }
      return {
        ...newState,
        winner: getWinner(newState.players),
        gameStatus: getGameStatus(newState),
      }
    default:
      return state
  }
}
