import axios from "axios";

const API_KEY = "bcfaa4e1e3043680c090a71ea16f0b61";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export const getArtistInfo = async (artist) => {
  const res = await axios.get(BASE_URL, {
    params: {
      method: "artist.getinfo",
      artist,
      api_key: API_KEY,
      format: "json",
    },
  });
  return res.data;
};

export const getTopTracks = async (artist) => {
  const res = await axios.get(BASE_URL, {
    params: {
      method: "artist.gettoptracks",
      artist,
      api_key: API_KEY,
      format: "json",
      limit: 5,
    },
  });
  return res.data;
};

export const getAlbums = async (artist) => {
  const res = await axios.get(BASE_URL, {
    params: {
      method: "artist.gettopalbums",
      artist,
      api_key: API_KEY,
      format: "json",
      limit: 5,
    },
  });
  return res.data;
};