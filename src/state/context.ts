import { createContext, Dispatch } from "react"
import { GameActions } from "./actions"
import { GameState, initialGameState } from "./state"

export const GameContext = createContext<{
  state: GameState,
  dispatch: Dispatch<GameActions>
}>({
  state: initialGameState,
  dispatch: () => undefined,
})
