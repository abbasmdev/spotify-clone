import SpotifyWebApi from "spotify-web-api-js";

export const spotifyAuthEndpoint = "https://accounts.spotify.com/authorize";

export const spotifyRedirectUri = "http://localhost:3000/auth/callback";

export const spotifyClientId = "b9c843b422fd4517b08a3aa4f0dc8da5";

export const spotifyAuthScopes = [
  "user-top-read",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "playlist-read-private",
];

export const spotifyLoginUrl = `${spotifyAuthEndpoint}?client_id=${spotifyClientId}&redirect_uri=${spotifyRedirectUri}&scope=${spotifyAuthScopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const spotifyInstance = new SpotifyWebApi();
