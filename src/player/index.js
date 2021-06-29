import { store } from "../store";
import { playerActions, PLAY_STATE } from "../store/player/playerSlice";
export const audioPlayer = new Audio();
audioPlayer.volume = 0.3;

audioPlayer.addEventListener("playing", (e) => {
  store.dispatch(playerActions.setPlayerstate(PLAY_STATE.playing));
});
audioPlayer.addEventListener("pause", (e) => {
  store.dispatch(playerActions.setPlayerstate(PLAY_STATE.paused));
});
audioPlayer.addEventListener("ended", (e) => {
  store.dispatch(playerActions.setPlayerstate(PLAY_STATE.ended));
});
