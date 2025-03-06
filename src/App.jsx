import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { SignupPage } from "./components/Auth/SignupPage";
import { LoginPage } from "./components/Auth/LoginPage";
import { ProductsPage } from "./components/Products/ProductsPage";
import { CartPage } from "./components/Products/CartPage";
import { Footer } from "./Footer";
import axios from "axios";
import { OrdersShow } from "./components/Products/OrdersShow";
import { ArtistIndex } from "./Artists/ArtistsIndex";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        hydrateFallback: () => null,
        loader: () =>
          axios
            .get("http://localhost:3000/products.json")
            .then((response) => response.data)
            .catch((error) => {
              console.log(error);
              return []; // Return an empty array if the request fails
            }),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
        hydrateFallback: () => null,
        loader: () =>
          axios
            .get("http://localhost:3000/carted_products.json")
            .then((response) => response.data)
            .catch((error) => {
              console.log(error);
              return []; // Return an empty array if the request fails
            }),
      },
      {
        path: "/orders/:id",
        element: <OrdersShow />,
        hydrateFallback: () => null,
        loader: ({ params }) =>
          axios
            .get(`http://localhost:3000/orders/${params.id}.json`)
            .then((response) => response.data)
            .catch((error) => {
              console.log(error);
              return []; // Return an empty array if the request fails
            }),
      },
      {
        path: "/artists",
        element: <ArtistIndex />,
        hydrateFallback: () => null,
        loader: () =>
          axios
            .get("http://localhost:3000/artists.json")
            .then((response) => response.data)
            .catch((error) => {
              console.log(error);
              return []; // Return an empty array if the request fails
            }),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { Header } from "./Header";
// import { ProductsPage } from "./components/Products/ProductsPage";
// import { Footer } from "./Footer";
// import { LoginPage } from "./components/Auth/LoginPage";
// import { LogoutLink } from "./components/Auth/LogoutLink";
// import { SignupPage } from "./components/Auth/SignUpPage";
// import { CartedProductsNew } from "./components/Products/CartedProductsNew";

// function App() {
//   return (
//     <div>
//       <Header />
//       <CartedProductsNew />
//       <LoginPage />
//       <LogoutLink />
//       <SignupPage />
//       <ProductsPage />
//       <Footer />
//     </div>
//   );
// }

// export default App;
