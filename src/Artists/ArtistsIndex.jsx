import { useLoaderData, useNavigate } from "react-router-dom";

export function ArtistIndex({ onShow }) {
  const artist = useLoaderData();
  console.log(artist);

  // const cartedProducts = artist.carted_products || [];
  // const artists = artist.id[] || [];

  console.log(artist.id);

  return (
    <>
      <div>
        <h1>All Current Artists</h1>
        {artists.map((artist) => (
          <div key={artist.id}>
            <h2>{artist.artist_name}</h2>
            <div className="image">
              <img src={artist.image} alt={artist.artist_name} />
            </div>
            <p>Description: {artist.artist_bio}</p>
            {/* <button onClick={() => onShow(artist)}>View Art Details</button> */}

            {/* <div>
              artist show details
              <h3>Artist: {artist.artist_name}</h3>
              <img src={artist.image} alt={artist.artist_name} />
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
}
