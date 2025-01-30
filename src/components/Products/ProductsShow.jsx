export function ProductsShow({ product, variant }) {
  return (
    <>
      <div>{product.image_url}</div>
      <h1>Product information</h1>
      <p>Name: {product.artpiece_name}</p>
      <p>Description: {product.description}</p>
      {/* <p>Price: ${variant.price}</p>
      <p>Size: {variant.print_size}</p> */}

      <div>
        <h3>Price and Size Options</h3>
        {product.product_variants.map((variant, index) => (
          <div key={index}>
            <p>Price: ${variant.price}</p>
            <p>Size: {variant.print_size}</p>
          </div>
        ))}
      </div>
    </>
  );
}
