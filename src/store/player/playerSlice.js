import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { audioPlayer } from "../../player";

export const PLAY_STATE = Object.freeze({
  idle: "idle",
  playing: "playing",
  paused: "paused",
  ended: "ended",
});

export const setTrackAndPlay = createAsyncThunk(
  "player/setTrackAndPlay",
  async (track) => {
    try {
      audioPlayer.src = track?.preview_url;

      await audioPlayer?.play();

      return track;
    } catch (error) {
      throw error;
    }
  }
);

export const pausePlayer = createAsyncThunk("player/pausePlayer", async () => {
  try {
    audioPlayer.pause();
    return PLAY_STATE.paused;
  } catch (error) {
    throw error;
  }
});

export const playPlayer = createAsyncThunk("player/playPlayer", async () => {
  try {
    await audioPlayer.play();
    return PLAY_STATE.playing;
  } catch (error) {
    throw error;
  }
});

export const setPlayerVolume = createAsyncThunk(
  "player/setPlayerVolume",
  async (volume) => {
    audioPlayer.volume = volume;
    return volume;
  }
);
const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentTrack: null,
    playState: PLAY_STATE.idle,
    volume: 0.3,
  },
  reducers: {
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    setPlayerstate(state, action) {
      state.playState = action.payload;
    },

    setVolum(state, action) {
      state.volume = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTrackAndPlay.fulfilled, (state, action) => {
      playerSlice.caseReducers.setCurrentTrack(state, action);
    });
    builder.addCase(setPlayerVolume.fulfilled, (state, action) => {
      playerSlice.caseReducers.setVolum(state, action);
    });
    builder.addCase(playPlayer.fulfilled, (state, action) => {
      playerSlice.caseReducers.setPlayerstate(state, action);
    });
    builder.addCase(pausePlayer.fulfilled, (state, action) => {
      playerSlice.caseReducers.setPlayerstate(state, action);
    });
  },
});

export const selectCurrentTrack = (state) => state.player.currentTrack;
export const selectPlayerPlayState = (state) => state.player.playState;
export const selectCurrentVolume = (state) => state.player.volume;
export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
