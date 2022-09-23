import { ActionType, AddPlayer, ResetGame, SetPlayerValue } from "./actions";
import { GameState, Player, Status } from "./state"

export const getWinner = (players: Player[]): Player | null => {
  let winnerValue = 0
  let winner = null
  players.forEach((player: Player) => {
    if (player.value && player.value > winnerValue) {
      winner = player
      winnerValue = player.value || 0
    }
  });
  return winner
}

export const getGameStatus = (state: GameState): Status => {
  let numberOfPlayersPlayed = 0
  state.players.forEach((player: Player) => {
    if (player.status === Status.Finished) {
      numberOfPlayersPlayed++
    }
  })
  if (numberOfPlayersPlayed === 0) {
    return Status.Finished
  }
  return Status.InProgress
}

export const addPlayer = (player: Player): AddPlayer => ({
  type: ActionType.AddPlayer,
  payload: player,
})

export const setPlayerValue = (id: number, value: number): SetPlayerValue => ({
  type: ActionType.SetPlayerValue,
  payload: {
    id,
    value
  },
})

export const resetGame = (): ResetGame => ({
  type: ActionType.ResetGame,
})
