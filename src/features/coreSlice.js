import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    context:{
      isLoaded:true,
      isStarted:false
    },
    players: [
        {
            title: "kick1",
            parent: "kick",
            status:"stopped"
        },
        {
            title: "kick2",
            parent: "kick",
            status:"stopped"
        },
        {
            title: "kick3",
            parent: "kick",
            status:"stopped"
        },
        {
            title: "kick4",
            parent: "kick",
            status:"stopped"
        },
        {
            title: "fx1",
            parent: "fx",        
            status:"stopped"
        },
        {
            title: "fx2",
            parent: "fx",        
            status:"stopped"
        },
        {
            title: "fx3",
            parent: "fx",        
            status:"stopped"
        },
        {
            title: "fx4",
            parent: "fx",        
            status:"stopped"
        },
        {
            title: "synth1",
            parent: "synth",
            status:"stopped"
        },
        {
            title: "synth2",
            parent: "synth",
            status:"stopped"
        },
        {
            title: "synth3",
            parent: "synth",
            status:"stopped"
        },
        {
            title: "synth4",
            parent: "synth",
            status:"stopped"
        },
        {
            title: "brass1",
            parent: "brass",
            status:"stopped"
        },
        {
            title: "brass2",
            parent: "brass",
            status:"stopped"
        },
        {
            title: "brass3",
            parent: "brass",
            status:"stopped"
        },
        {
            title: "brass4",
            parent: "brass",
            status:"stopped"
        },
    ]
}

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    startContext: (state,action) => {
        state.context.isStarted = true
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { startButtonState, stopButtonState, queuedButtonState } = coreSlice.actions

export default coreSlice.reducer