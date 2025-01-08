export function ProductsIndex({ products }) {
  return (
    <div>
      <h1>All Artworks</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.artpiece_name}</h2>
          <img src={product.image_url} />
          <p>Description: {product.description}</p>
          {/* <p>Item Size: {product.product_variants.price}</p>
          <p>Price: {product.product_variants.print_size}</p> */}
        </div>
      ))}
    </div>
  );
}
