export const msToMinutesAndSeconds = (millis = 0) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  return { minutes, seconds };
};

export const msToMinutesAndSecondsFormated = (millis = 0) => {
  const { minutes, seconds } = msToMinutesAndSeconds(millis);
  const m = `${minutes < 10 ? "0" : ""}${minutes}`;
  const s = `${seconds < 10 ? "0" : ""}${seconds}`;
  return {
    minutes: m,
    seconds: s,
  };
};
