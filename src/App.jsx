import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ArtistCard from "./components/ArtistCard";
import TrackList from "./components/TrackList";
import AlbumList from "./components/AlbumList";
import Charts from "./components/Charts";
import {
  getArtistInfo,
  getTopTracks,
  getAlbums
} from "./api";
function App() {
  const [artist, setArtist] = useState("");
  const [artistData, setArtistData] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const search = async () => {
    if (!artist) {
      setError("Please enter artist name");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const info = await getArtistInfo(artist);
      const trackData = await getTopTracks(artist);
      const albumData = await getAlbums(artist);
      setArtistData(info.artist);
      setTracks(trackData.toptracks.track);
      setAlbums(albumData.topalbums.album);
    }
    catch (err) {
      setError("Artist not found ❌");
      setArtistData(null);
      setTracks([]);
      setAlbums([]);
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="app">
      <Navbar />
      <SearchBar
        artist={artist}
        setArtist={setArtist}
        search={search}
      />
      {
        loading &&
        <h2>
          Loading 🎧...
        </h2>
      }
      {
        error &&
        <h3>
          {error}
        </h3>
      }
      {
        artistData &&
        <ArtistCard
          data={artistData}
        />
      }
      {
        tracks.length > 0 &&
        <TrackList
          tracks={tracks}
        />
      }
      {
        albums.length > 0 &&
        <AlbumList
          albums={albums}
        />
      }
      {
        artistData && tracks.length > 0 &&
        <Charts
          artistData={artistData}
          tracks={tracks}
        />
      }
    </div>
  );
}
export default App;