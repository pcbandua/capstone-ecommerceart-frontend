import { useLoaderData } from "react-router-dom";

export function OrdersIndex() {
  const orders = useLoaderData(); // array of orders

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>

      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg mb-8 p-6">
          {/* Order summary */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="font-semibold">Order ID:</span>{" "}
              <span>{order.id}</span>
            </div>
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
          </div>

          {/* Items list */}
          <h2 className="text-xl font-semibold mb-3">Items</h2>
          <ul className="space-y-3">
            {order.carted_products.map((item) => (
              <li
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.product_artpiece_name}</p>
                  {/* If you have a quantity field, uncomment: */}
                  {/* <p className="text-sm text-gray-600">Qty: {item.quantity}</p> */}
                </div>
                <span className="text-gray-800 font-semibold">
                  ${item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// import { useLoaderData, useNavigate } from "react-router-dom";

// export function OrdersIndex() {
//   const orders = useLoaderData();
//   console.log(orders);

//   const Orders = orders.id || [];

//   console.log(Orders);

//   return (
//     <div>
//       {orders.map((order) => (
//         <div key={order.id}>
//           <p>
//             <b>id: </b>
//             {order.id}
//           </p>
//           <p>
//             <b>subtotal: </b>
//             {order.subtotal}
//           </p>
//           <p>
//             <b>total: </b>
//             {order.total}
//           </p>
//           <p>
//             <b>tax: </b>
//             {order.tax}
//           </p>

//           <p>
//             <b>quantity:</b>
//             {order.quantity}
//           </p>
//           <p>
//             <b>name:</b>
//             {order.carted_products.product_artpiece_name}
//           </p>
//           <p>
//             <b>price:</b>
//             {order.product.price}
//           </p>
//         </div>
//       ))}
//       <p>orders history</p>
//     </div>
//   );
// }
