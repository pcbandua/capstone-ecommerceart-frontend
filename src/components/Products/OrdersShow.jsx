import { useLoaderData, useNavigate } from "react-router-dom";

export function OrdersShow() {
  const order = useLoaderData();
  const navigate = useNavigate();
  const cartedProducts = order.carted_products || [];

  return (
    <div className="container mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-6"
      >
        &larr; Back to Orders
      </button>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>

        {/* Order summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="font-semibold">Subtotal:</span>{" "}
            <span>${order.subtotal}</span>
          </div>
          <div>
            <span className="font-semibold">Tax:</span>{" "}
            <span>${order.tax}</span>
          </div>
          <div>
            <span className="font-semibold">Total:</span>{" "}
            <span>${order.total}</span>
          </div>
          <div>
            <span className="font-semibold">Created:</span>{" "}
            <span>{new Date(order.created_at).toLocaleString()}</span>
          </div>
        </div>

        {/* Items list */}
        <h2 className="text-xl font-semibold mb-3">Items</h2>
        <ul className="space-y-4">
          {cartedProducts.map((cp) => (
            <li
              key={cp.id}
              className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{cp.product.artpiece_name}</p>
                <p className="text-sm text-gray-600">Qty: {cp.quantity}</p>
              </div>
              <span className="text-gray-800 font-semibold">
                ${cp.product.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// import { useLoaderData, useNavigate } from "react-router-dom";

// export function OrdersShow() {
//   const order = useLoaderData();
//   console.log(order);

//   const cartedProducts = order.carted_products || [];

//   console.log(cartedProducts);

//   return (
//     <div>
//       <p>
//         <b>id: </b>
//         {order.id}
//       </p>
//       <p>
//         <b>subtotal: </b>
//         {order.subtotal}
//       </p>
//       <p>
//         <b>total: </b>
//         {order.total}
//       </p>
//       <p>
//         <b>tax: </b>
//         {order.tax}
//       </p>
//       {cartedProducts.map((cp) => (
//         <div key={cp.id}>
//           <p>
//             <b>quantity:</b>
//             {cp.quantity}
//           </p>
//           <p>
//             <b>name:</b>
//             {cp.product.artpiece_name}
//           </p>
//           <p>
//             <b>price:</b>
//             {cp.product.price}
//           </p>
//         </div>
//       ))}
//       <p>orders show</p>
//     </div>
//   );
// }
