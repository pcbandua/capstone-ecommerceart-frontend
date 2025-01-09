export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Create New Art Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Art Piece Name: <input name="artpiece_name" type="text" />
        </div>
        <div>
          Iamge Url: <input name="image_url" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Height: <input name="height" type="text" />
        </div>
        <button type="submit">Create New Art Product</button>
      </form>
    </div>
  );
}
