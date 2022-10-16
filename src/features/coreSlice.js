import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    context:{
      isLoaded:true,
      isStarted:false
    },
    players: []
}

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    loadPlayers: (state, action) => {
        state.players = action.payload.players
    },
    startContext: (state,action) => {
        state.context.isStarted = false
    },
    startButtonState: (state, action) => {
        // update the state of the button as playing
        state.players
            .find(i => i.title === action.payload.title).status = "playing"
        // update others buttons in the group as "stopped"
        state.players
            .filter(i => i.parent === action.payload.parent)
            .filter(i => i.title !== action.payload.title)
            .forEach(i => i.status = "stopped")
    },
    stopButtonState: (state, action) => {
        // update the started button as true
        state.players
            .find(i => i.title === action.payload.title).status = "stopped"
    },
    queuedButtonState: (state,action) => {
        state.players
            .find(i => i.title === action.payload.title).status = "queued"
    },
    resetPlayers: (state,action) => {
        state.players = initialState.players
    }
  }
})

// Action creators are generated for each case reducer function
export const { startButtonState, stopButtonState, queuedButtonState, startContext, loadPlayers, resetPlayers } = coreSlice.actions

export default coreSlice.reducer