export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All Artworks</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.artpiece_name}</h2>
          <img src={product.image_url} alt={product.artpiece_name} />
          <p>Description: {product.description}</p>
          {/* <p>Size: {product.size}</p>
          <p>Price: {product.price}</p> */}

          <div>
            <h3>Price and Size Options</h3>
            {product.product_variants.map((variant, index) => (
              <div key={index}>
                <p>Price: ${variant.price}</p>
                <p>Size: {variant.print_size}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
