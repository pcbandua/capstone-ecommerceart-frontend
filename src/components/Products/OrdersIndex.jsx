import { useLoaderData, useNavigate } from "react-router-dom";

export function OrdersIndex() {
  const orders = useLoaderData();
  console.log(order);
  orders;
  const Orders = order.id || [];

  console.log(Orders);

  return (
    <div>
      <p>
        <b>id: </b>
        {order.id}
      </p>
      <p>
        <b>subtotal: </b>
        {order.subtotal}
      </p>
      <p>
        <b>total: </b>
        {order.total}
      </p>
      <p>
        <b>tax: </b>
        {order.tax}
      </p>
      {Orders.map((order) => (
        <div key={order.id}>
          <p>
            <b>quantity:</b>
            {order.quantity}
          </p>
          <p>
            <b>name:</b>
            {order.product.artpiece_name}
          </p>
          <p>
            <b>price:</b>
            {order.product.price}
          </p>
        </div>
      ))}
      <p>orders history</p>
    </div>
  );
}
