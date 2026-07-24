import React from "react";

function ArtistCard({ data }) {
  if (!data) return null;

  const image =
    data.image?.find((img) => img.size === "extralarge")?.["#text"] ||
    data.image?.find((img) => img.size === "large")?.["#text"] ||
    data.image?.find((img) => img.size === "medium")?.["#text"] ||
    "https://placehold.co/300x300?text=No+Image";

  return (
    <div className="artist-card">
      <img
        src={image}
        alt={data.name}
        onError={(e) => {
          e.target.src = "https://placehold.co/300x300?text=No+Image";
        }}
      />

      <h2>{data.name}</h2>

      <div className="artist-stats">
        <div className="stat">
          <h3>👥 Listeners</h3>
          <p>{Number(data.stats.listeners).toLocaleString()}</p>
        </div>

        <div className="stat">
          <h3>🎧 Play Count</h3>
          <p>{Number(data.stats.playcount).toLocaleString()}</p>
        </div>
      </div>

      {data.bio?.summary && (
        <p className="artist-bio">
          {data.bio.summary.replace(/<[^>]+>/g, "").slice(0, 250)}...
        </p>
      )}
    </div>
  );
}

export default ArtistCard;