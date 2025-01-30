export function ProductsIndex({ products, artist, onShow }) {
  return (
    <>
      <div>
        <h1>All Artworks</h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.artpiece_name}</h2>
            <div class="image">
              <img src={product.image_url} alt={product.artpiece_name} />
            </div>
            <p>Description: {product.description}</p>
            <button onClick={() => onShow(product)}>View Art Details</button>

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
