import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/login">Login</a> |{" "}
        <a href="/signup">SignUp</a> | <a href="/cartpage">My Cart</a> |
        <a href="/orders/:id">Orders</a> |<a href="/orders">Order History</a> |{" "}
        <a href="/artists">Current Artists</a>
      </nav>
    </header>
  );
}
