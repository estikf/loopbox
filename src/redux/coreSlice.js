import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    context: {
        isLoaded: true,
        isStarted: false,
    },
    id:"",
    players: [],
};

export const coreSlice = createSlice({
    name: "core",
    initialState,
    reducers: {
        loadPlayers: (state, action) => {
            state.id = action.payload.id;
            state.players = action.payload.players;
        },
        startReduxContext: (state, action) => {
            state.context.isStarted = true;
        },
        updateButtonState: (state, action) => {
            if(action.payload.status === "started"){
                // update the state of the button as started
                state.players.find((i) => i.title === action.payload.title).status = action.payload.status;
                // update others buttons in the group as "stopped"
                state.players
                    .filter((i) => i.parent === action.payload.parent)
                    .filter((i) => i.title !== action.payload.title)
                    .forEach((i) => (i.status = "stopped"));
            }else{
                state.players.find((i) => i.title === action.payload.title).status = action.payload.status;
            }
        },
        resetPlayers: (state, action) => {
            state.players = initialState.players;
            state.context.isStarted = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    updateButtonState,
    startReduxContext,
    loadPlayers,
    resetPlayers,
} = coreSlice.actions;

export default coreSlice.reducer;
