export function ProductsIndex({ products, artist, onShow }) {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          <h1 className="font-sans text-4xl font-bold py-4">All Artworks</h1>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="text-2xl font-medium py-4">
                <h2>{product.artpiece_name}</h2>
              </div>

              {/* image */}
              <div className="image">
                <img
                  className="rounded-sm object-cover h-auto aspect-rectangle w-full"
                  src={product.image_url}
                  alt={product.artpiece_name}
                />
              </div>
              <p>{product.description}</p>
              <button
                className="shadow-sm bg-slate-100 rounded-md text-lg py-2 px-4 w-full bg-blue"
                onClick={() => onShow(product)}
              >
                View Art Details
              </button>

              {/* <div>
              artist show details
              <h3>Artist: {artist.artist_name}</h3>
              <img src={artist.image} alt={artist.artist_name} />
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
