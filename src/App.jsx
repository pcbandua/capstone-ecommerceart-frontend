import { Header } from "./Header";
import { ProductsPage } from "./components/Products/ProductsPage";
import { Footer } from "./Footer";
import { LoginPage } from "./components/Auth/LoginPage";
import { LogoutLink } from "./components/Auth/LogoutLink";
import { SignupPage } from "./components/Auth/SignUpPage";

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
