import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export function ArtistIndex({ onShow }) {
  const artists = useLoaderData();
  const [query, setQuery] = useState("");

  // Filter artists by name
  const filtered = artists.filter((a) =>
    a.artist_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header with title & search */}
      <header className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className="font-sans text-4xl text-zinc-900 font-bold py-4">
            All Current Artists
          </h1>
          <input
            type="search"
            placeholder="Search artists…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              mt-4 sm:mt-0
              w-full sm:w-64
              px-3 py-2
              border-b-2 border-zinc-300
              focus:outline-none focus:border-cyan-500
              text-zinc-900
              placeholder-zinc-400
              transition
            "
          />
        </div>
      </header>

      {/* Main grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <p className="text-center text-zinc-500">No artists found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((artist) => (
              <div
                key={artist.id}
                className="
                  bg-white
                  rounded-lg
                  shadow-sm
                  hover:shadow-lg
                  transition
                  flex flex-col
                  overflow-hidden
                "
              >
                {/* Artist image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.artist_name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Artist info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-2">
                    {artist.artist_name}
                  </h2>
                  <p className="text-sm text-zinc-700 flex-1">
                    {artist.artist_bio}
                  </p>
                  <button
                    onClick={() => onShow(artist)}
                    className="
                      mt-4
                      inline-block self-start
                      bg-zinc-900 hover:bg-cyan-600
                      text-white text-sm font-medium
                      px-4 py-2 rounded
                      transition
                    "
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// import { useLoaderData, useNavigate } from "react-router-dom";

// export function ArtistIndex({ onShow }) {
//   const artist = useLoaderData();
//   console.log(artist);

//   // const cartedProducts = artist.carted_products || [];
//   // const artists = artist[0] || [];

//   // console.log(artists);

//   return (
//     <>
//       <div>
//         <h1>All Current Artists</h1>
//         {artist.map((artist) => (
//           <div key={artist.id}>
//             <h2>{artist.artist_name}</h2>
//             <div className="image">
//               <img src={artist.image} alt={artist.artist_name} />
//             </div>
//             <p>Description: {artist.artist_bio}</p>
//             {/* <button onClick={() => onShow(artist)}>View Art Details</button> */}

//             {/* <div>
//               artist show details
//               <h3>Artist: {artist.artist_name}</h3>
//               <img src={artist.image} alt={artist.artist_name} />
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
